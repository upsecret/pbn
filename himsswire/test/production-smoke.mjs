import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { setTimeout as pause } from "node:timers/promises";

const seeds = JSON.parse(await readFile(new URL("../content/launch.json", import.meta.url)));
const previewToken = "c".repeat(64);
const marker = "Editorial lifecycle marker";
const image = "http://localhost:39101/images/hospital-operations.jpg";
let unavailable = false;
const topics = new Map(seeds.map((seed, index) => [seed.topic, index + 1]));

function record(seed, index) {
  return {
    id: index + 1,
    slug: seed.slug,
    status: "publish",
    date_gmt: "2026-11-13T0" + index + ":00:00",
    modified_gmt: "2026-11-13T05:00:00",
    title: { rendered: seed.title },
    excerpt: { rendered: seed.summary },
    content: { rendered: "<p>" + seed.sections[0][1] + "</p><script>alert(1)</script>" },
    categories: [topics.get(seed.topic)],
    _embedded: {
      "wp:term": [[{ id: topics.get(seed.topic), slug: seed.topic, taxonomy: "category" }]],
      ...(seed.image ? { "wp:featuredmedia": [{ source_url: image, alt_text: seed.alt }] } : {}),
    },
  };
}

const posts = seeds.map(record);
posts.push(record({ ...seeds[0], title: "Retired archive fixture", slug: "rhinoplasty-trends" }, 6));
posts.unshift({
  ...record({ ...seeds[0], title: marker, slug: "lifecycle-marker" }, 5),
  status: "draft",
});
const testPost = posts[0];
const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  if (unavailable) return res.writeHead(503).end();
  if (url.pathname === "/wp-json/himsswire/v1/preview" && req.method === "POST") {
    let payload = "";
    for await (const chunk of req) payload += chunk;
    if (JSON.parse(payload).token !== previewToken) return res.writeHead(403).end();
    return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(testPost));
  }
  if (url.pathname === "/wp-json/wp/v2/categories") {
    const id = topics.get(url.searchParams.get("slug"));
    return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(id ? [{ id }] : []));
  }
  if (url.pathname !== "/wp-json/wp/v2/posts") return res.writeHead(404).end();
  const slug = url.searchParams.get("slug");
  const query = url.searchParams.get("search");
  const category = url.searchParams.get("categories");
  const limit = Number(url.searchParams.get("per_page") || 10);
  const page = Number(url.searchParams.get("page") || 1);
  const selected = posts.filter((post) => post.status === "publish"
    && (!slug || post.slug === slug)
    && (!query || post.title.rendered.toLowerCase().includes(query.toLowerCase()))
    && (!category || post.categories.includes(Number(category))))
    .sort((a, b) => b.date_gmt.localeCompare(a.date_gmt));
  const pages = Math.ceil(selected.length / limit);
  if (page > 1 && page > pages) {
    return res.writeHead(400, { "Content-Type": "application/json" }).end(JSON.stringify({ code: "rest_post_invalid_page_number" }));
  }
  res.writeHead(200, { "Content-Type": "application/json", "X-WP-TotalPages": pages });
  res.end(JSON.stringify(selected.slice((page - 1) * limit, page * limit)));
});
await new Promise((resolve) => server.listen(39100, "127.0.0.1", resolve));
const app = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "39101"], {
  env: { ...process.env, WORDPRESS_URL: "http://127.0.0.1:39100" },
  stdio: ["ignore", "ignore", "ignore"],
});
const origin = "http://127.0.0.1:39101";

async function probe(path, status, value, present = true) {
  const res = await fetch(origin + path, { redirect: "manual" });
  assert.equal(res.status, status, path + " status");
  if (value) {
    const body = await res.text();
    assert.equal(body.includes(value), present, path + " contains " + value);
  }
  return res;
}

try {
  for (let attempt = 0; ; attempt++) {
    try {
      await probe("/about", 200, "Upsecret");
      break;
    } catch (error) {
      if (attempt === 40) throw error;
      await pause(250);
    }
  }

  if (process.argv.includes("--serve")) {
    console.log("Local preview with simulated WordPress at " + origin);
    await new Promise((resolve) => process.once("SIGINT", resolve));
    process.exitCode = 0;
  } else {

  const detail = "/news/lifecycle-marker";
  const surfaces = ["/", "/news", "/topics/interoperability", "/search?q=Editorial", "/feed.xml", "/sitemap.xml"];
  const publicChecks = async (visible, title = marker) => {
    for (const path of surfaces) {
      const response = await probe(path, 200, path === "/sitemap.xml" ? detail : title, visible);
      assert.match(response.headers.get("cache-control"), /no-store/);
    }
  };

  await probe(detail, 404, marker, false);
  await publicChecks(false);
  await probe("/preview?token=" + "b".repeat(64), 404, marker, false);
  const preview = await probe("/preview?token=" + previewToken, 200, marker);
  assert.match(preview.headers.get("x-robots-tag"), /noindex/);

  testPost.status = "publish";
  await probe(detail, 200, marker);
  await probe(detail, 200, "<script>alert(1)</script>", false);
  await publicChecks(true);
  testPost.title.rendered = marker + " updated";
  await probe(detail, 200, testPost.title.rendered);
  await publicChecks(true, testPost.title.rendered);

  unavailable = true;
  for (const path of [detail, ...surfaces]) await probe(path, 500, marker, false);
  unavailable = false;
  testPost.status = "private";
  await probe(detail, 404, marker, false);
  await publicChecks(false);

  const legacy = await probe("/blog-list", 308);
  assert.equal(new URL(legacy.headers.get("location"), origin).pathname, "/news");
  await probe("/rhinoplasty-trends/", 410);
  await probe("/blog/rhinoplasty-trends/", 410);
  await probe("/news/rhinoplasty-trends", 410);
  for (const path of ["/", "/news", "/topics/interoperability", "/search?q=Retired", "/feed.xml", "/sitemap.xml"]) {
    await probe(path, 200, "/news/rhinoplasty-trends", false);
  }
  await probe("/unused-route", 404);
  await probe("/news?page=100", 404);
  console.log("Passed publishing lifecycle, draft preview, all public surfaces, outage and redirects.");
  }
} finally {
  app.kill();
  server.close();
}

