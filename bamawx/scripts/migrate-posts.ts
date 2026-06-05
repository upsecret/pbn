/**
 * Migrate Blogger (Atom) posts → src/content/posts/*.mdx
 *
 * Run: npx tsx scripts/migrate-posts.ts
 *
 * Env:
 *   MIGRATE_MAX_POSTS   — max posts to import (default: all)
 *   BAMAWX_ATOM_FEED    — override Atom base URL (default: try bamawx.com then blogger.com)
 */

import { createHash } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import { XMLParser } from "fast-xml-parser";
import { load } from "cheerio";
import matter from "gray-matter";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

import type { Post } from "@/types";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "src", "content", "posts");
const IMAGES_ROOT = path.join(ROOT, "public", "images", "posts");

const UA = "bamawx-migrate/1.0 (+https://www.bamawx.com)";
const ACCEPT_ATOM = "application/atom+xml, application/xml;q=0.9, */*;q=0.8";
const MAX_RESULTS = 500;

const DEFAULT_FEEDS = [
  process.env.BAMAWX_ATOM_FEED?.trim(),
  "https://www.bamawx.com/feeds/posts/default",
  "https://www.blogger.com/feeds/25822879/posts/default",
].filter((s): s is string => Boolean(s));

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  // Long HTML posts contain many `&nbsp;` / `&amp;` entities (default cap is 1000)
  processEntities: {
    maxTotalExpansions: 5_000_000,
  },
});

function asArray<T>(x: T | T[] | undefined): T[] {
  if (x == null) return [];
  return Array.isArray(x) ? x : [x];
}

function getText(node: unknown): string {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (typeof node === "object" && node !== null && "#text" in node) {
    return String((node as { "#text": unknown })["#text"]);
  }
  return String(node);
}

function isoDateOnly(published: string): string {
  const m = published.match(/^(\d{4}-\d{2}-\d{2})/);
  if (m) return m[1];
  const d = new Date(published);
  if (!Number.isNaN(d.getTime())) {
    return d.toISOString().slice(0, 10);
  }
  return published.slice(0, 10);
}

function slugifyBase(s: string): string {
  const base = s
    .toLowerCase()
    .replace(/\.html?$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return base || "post";
}

function slugFromPermalink(href: string): string {
  try {
    const u = new URL(href);
    const last = u.pathname.split("/").filter(Boolean).pop() ?? "post";
    return slugifyBase(last);
  } catch {
    return "post";
  }
}

function postIdFromEntryId(entryId: string): string {
  const m = entryId.match(/post-(\d+)/);
  return m?.[1] ?? createHash("sha256").update(entryId).digest("hex").slice(0, 10);
}

function alternateHtmlHref(links: Record<string, unknown>[]): string | undefined {
  for (const l of links) {
    if (l["@_rel"] === "alternate" && l["@_type"] === "text/html") {
      return l["@_href"] as string;
    }
  }
  return undefined;
}

function mediaThumbnailUrl(entry: Record<string, unknown>): string | undefined {
  const mt = entry["media:thumbnail"] as Record<string, unknown> | undefined;
  if (mt?.["@_url"]) return mt["@_url"] as string;
  const nested = asArray(
    (entry as { "media:thumbnail"?: unknown })["media:thumbnail"] as
      | Record<string, unknown>
      | undefined
  );
  for (const n of nested) {
    if (n?.["@_url"]) return n["@_url"] as string;
  }
  return undefined;
}

function entryTags(entry: Record<string, unknown>): string[] {
  const cats = asArray(entry.category as Record<string, unknown>[] | undefined);
  const terms = cats
    .map((c) => c?.["@_term"] as string | undefined)
    .filter((t): t is string => Boolean(t && t.trim()));
  return [...new Set(terms)];
}

function excerptFromText(text: string, max = 280): string {
  const one = text.replace(/\s+/g, " ").trim();
  if (one.length <= max) return one;
  return `${one.slice(0, max - 1)}…`;
}

function extFromUrl(u: string): string {
  try {
    const { pathname } = new URL(u.startsWith("//") ? `https:${u}` : u);
    const m = pathname.match(/\.([a-zA-Z0-9]{2,5})(?:$|\?)/);
    if (m) return `.${m[1].toLowerCase()}`;
  } catch {
    /* ignore */
  }
  return ".jpg";
}

function upgradeBloggerImageUrl(url: string): string {
  try {
    const u = new URL(url.startsWith("//") ? `https:${url}` : url);
    if (!u.hostname.includes("googleusercontent.com")) return url.startsWith("//") ? `https:${url}` : url;
    return url
      .replace(/^\/\//, "https://")
      .replace(/\/s\d+(-c)?\//, "/s1600/");
  } catch {
    return url.startsWith("//") ? `https:${url}` : url;
  }
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { Accept: ACCEPT_ATOM, "User-Agent": UA },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return res.text();
}

async function downloadTo(
  imageUrl: string,
  destFsPath: string
): Promise<void> {
  const abs = imageUrl.startsWith("//") ? `https:${imageUrl}` : imageUrl;
  const res = await fetch(abs, { headers: { "User-Agent": UA }, redirect: "follow" });
  if (!res.ok) throw new Error(`Image HTTP ${res.status} ${abs}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(path.dirname(destFsPath), { recursive: true });
  await writeFile(destFsPath, buf);
}

async function resolveFeedBase(): Promise<string> {
  for (const base of DEFAULT_FEEDS) {
    const u = new URL(base);
    u.searchParams.set("max-results", "1");
    u.searchParams.set("start-index", "1");
    try {
      const xml = await fetchText(u.toString());
      if (xml.includes("<entry") && (xml.includes("<feed") || xml.includes("xmlns='http://www.w3.org/2005/Atom'"))) {
        if (!base.includes("bamawx.com") && DEFAULT_FEEDS[0] === process.env.BAMAWX_ATOM_FEED?.trim()) {
          /* custom env */
        } else if (base.includes("blogger.com")) {
          console.warn(
            "[migrate-posts] Using Blogger Atom feed (blogger.com/feeds/…). " +
              "Custom domain /feeds/posts/default often returns HTML to scripts; content matches bamawx.com."
          );
        }
        return base.split("?")[0];
      }
    } catch {
      /* try next */
    }
  }
  throw new Error("Could not load a valid Atom feed. Set BAMAWX_ATOM_FEED to a working Atom URL.");
}

interface AtomEntry {
  raw: Record<string, unknown>;
  title: string;
  published: string;
  permalink: string;
  html: string;
  tags: string[];
  thumbUrl?: string;
  entryId: string;
}

function parseEntries(xml: string): AtomEntry[] {
  const doc = parser.parse(xml) as {
    feed?: { entry?: Record<string, unknown> | Record<string, unknown>[] };
  };
  const entries = asArray(doc.feed?.entry);
  const out: AtomEntry[] = [];
  for (const e of entries) {
    const title = getText(e.title).trim();
    const published = getText(e.published).trim() || getText(e.updated).trim();
    const links = asArray(e.link as Record<string, unknown>[] | undefined);
    const permalink = alternateHtmlHref(links);
    if (!permalink) continue;
    const contentNode = e.content as Record<string, unknown> | undefined;
    const html = getText(contentNode ?? e.summary).trim();
    if (!html) continue;
    const entryId = getText(e.id).trim() || permalink;
    out.push({
      raw: e,
      title,
      published,
      permalink,
      html,
      tags: entryTags(e),
      thumbUrl: mediaThumbnailUrl(e),
      entryId,
    });
  }
  return out;
}

function parseOpenSearchTotalResults(xml: string): number | undefined {
  const m = xml.match(/<openSearch:totalResults>(\d+)<\/openSearch:totalResults>/i);
  if (m) return parseInt(m[1], 10);
  const m2 = xml.match(/totalResults>(\d+)</i);
  if (m2) return parseInt(m2[1], 10);
  return undefined;
}

async function fetchAllEntries(feedBase: string): Promise<AtomEntry[]> {
  const all: AtomEntry[] = [];
  let startIndex = 1;
  let reportedTotal: number | undefined;
  for (;;) {
    const u = new URL(feedBase);
    u.searchParams.set("max-results", String(MAX_RESULTS));
    u.searchParams.set("start-index", String(startIndex));
    const xml = await fetchText(u.toString());
    if (reportedTotal == null) {
      reportedTotal = parseOpenSearchTotalResults(xml);
    }
    const batch = parseEntries(xml);
    if (batch.length === 0) break;
    all.push(...batch);
    startIndex += batch.length;
    if (reportedTotal != null && all.length >= reportedTotal) break;
    if (batch.length < MAX_RESULTS) {
      if (reportedTotal == null || all.length >= reportedTotal) break;
    }
  }
  return all;
}

async function processImagesAndConvert(
  html: string,
  slug: string,
  urlToLocal: Map<string, string>
): Promise<{ mdxBody: string; firstImagePublicPath?: string }> {
  const $ = load(html, { decodeEntities: true }, false);

  const imgs = $("img")
    .toArray()
    .map((el) => $(el).attr("src"))
    .filter((s): s is string => Boolean(s));

  let firstImagePublicPath: string | undefined;

  for (const src of imgs) {
    if (src.startsWith("data:")) continue;
    const abs = upgradeBloggerImageUrl(src);
    const h = createHash("sha256").update(abs).digest("hex").slice(0, 14);
    const ext = extFromUrl(abs);
    const safeName = `${h}${ext}`;
    const relPublic = `/images/posts/${slug}/${safeName}`;
    if (!urlToLocal.has(abs)) {
      const fsPath = path.join(IMAGES_ROOT, slug, safeName);
      try {
        await downloadTo(abs, fsPath);
        urlToLocal.set(abs, relPublic);
      } catch (err) {
        console.warn(`  [img skip] ${abs}`, err);
        urlToLocal.set(abs, abs);
      }
    }
    const local = urlToLocal.get(abs)!;
    if (!firstImagePublicPath && local.startsWith("/images/")) {
      firstImagePublicPath = local;
    }
  }

  $("img").each((_, el) => {
    const src = $(el).attr("src");
    if (!src || src.startsWith("data:")) return;
    const abs = upgradeBloggerImageUrl(src);
    const local = urlToLocal.get(abs);
    if (local) $(el).attr("src", local);
  });

  const serialized = $.root().children().toArray().length
    ? $.html()
    : html;

  const turndown = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });
  turndown.use(gfm);

  turndown.addRule("iframe", {
    filter(node) {
      return String(node.nodeName).toUpperCase() === "IFRAME";
    },
    replacement(_content, node) {
      const el = node as unknown as {
        getAttribute(name: string): string | null;
      };
      const src = el.getAttribute("src") || "";
      const width = el.getAttribute("width") || "";
      const height = el.getAttribute("height") || "";
      const allow = el.getAttribute("allow") || "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      return `\n\n<iframe src="${src}" width="${width || "560"}" height="${height || "315"}" allow="${allow}" allowFullScreen />\n\n`;
    },
  });

  const mdxBody = turndown.turndown(serialized).trim();
  return { mdxBody, firstImagePublicPath };
}

async function migrateEntry(
  e: AtomEntry,
  slug: string,
  urlToLocal: Map<string, string>
): Promise<Post> {
  const date = isoDateOnly(e.published);
  const { mdxBody, firstImagePublicPath } = await processImagesAndConvert(
    e.html,
    slug,
    urlToLocal
  );

  const stripped = load(e.html, { decodeEntities: true }, false).text();
  const excerpt = excerptFromText(stripped);

  let featuredImage: string | undefined = firstImagePublicPath;
  if (!featuredImage && e.thumbUrl) {
    const rawThumb = e.thumbUrl.startsWith("//") ? `https:${e.thumbUrl}` : e.thumbUrl;
    const h = createHash("sha256").update(rawThumb).digest("hex").slice(0, 14);
    const ext = extFromUrl(rawThumb);
    const safeName = `featured-${h}${ext}`;
    const relPublic = `/images/posts/${slug}/${safeName}`;
    const fsPath = path.join(IMAGES_ROOT, slug, safeName);
    try {
      await downloadTo(rawThumb, fsPath);
      featuredImage = relPublic;
    } catch {
      featuredImage = rawThumb;
    }
  }

  return {
    slug,
    title: e.title,
    date,
    excerpt,
    content: mdxBody,
    tags: e.tags,
    featuredImage,
  };
}

function buildMdxFile(post: Post): string {
  const fm: Record<string, unknown> = {
    title: post.title,
    slug: post.slug,
    date: post.date,
    tags: post.tags,
    excerpt: post.excerpt,
  };
  if (post.featuredImage) fm.featuredImage = post.featuredImage;
  if (post.category) fm.category = post.category;

  return matter.stringify(`${post.content}\n`, fm);
}

async function main(): Promise<void> {
  const maxPostsEnv = process.env.MIGRATE_MAX_POSTS;
  const maxPosts = maxPostsEnv ? Math.max(1, parseInt(maxPostsEnv, 10)) : Infinity;

  console.log("[migrate-posts] Resolving Atom feed…");
  const feedBase = await resolveFeedBase();
  console.log(`[migrate-posts] Feed base: ${feedBase}`);

  console.log("[migrate-posts] Downloading entries (paginated)…");
  let entries = await fetchAllEntries(feedBase);
  console.log(`[migrate-posts] Total entries: ${entries.length}`);

  if (Number.isFinite(maxPosts)) {
    entries = entries.slice(0, maxPosts);
    console.log(`[migrate-posts] Limited to ${entries.length} (MIGRATE_MAX_POSTS)`);
  }

  await mkdir(POSTS_DIR, { recursive: true });

  const slugCounts = new Map<string, number>();
  const urlToLocal = new Map<string, string>();

  let ok = 0;
  let fail = 0;

  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    const baseSlug = slugFromPermalink(e.permalink);
    const pid = postIdFromEntryId(e.entryId);
    const prev = slugCounts.get(baseSlug) ?? 0;
    slugCounts.set(baseSlug, prev + 1);
    const slug = prev === 0 ? baseSlug : `${baseSlug}-${pid}`;

    try {
      console.log(`[${i + 1}/${entries.length}] ${slug} — ${e.title.slice(0, 60)}…`);
      const post = await migrateEntry(e, slug, urlToLocal);
      const mdx = buildMdxFile(post);
      const outPath = path.join(POSTS_DIR, `${slug}.mdx`);
      await writeFile(outPath, mdx, "utf8");
      ok++;
    } catch (err) {
      console.error(`  ERROR ${slug}:`, err);
      fail++;
    }
  }

  console.log(`[migrate-posts] Done. OK=${ok} FAIL=${fail} → ${POSTS_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
