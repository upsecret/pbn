import fs from "fs";
import path from "path";

import { samplePosts } from "@/data/sample-posts";
import type { Post } from "@/types";

import {
  getFrontmatterString,
  getFrontmatterStringArray,
  parseMarkdown,
} from "@/lib/markdown";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

function listMdxFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

function fileToSlug(filename: string): string {
  return filename.replace(/\.mdx?$/i, "");
}

function readPostFromFile(filename: string): Post | null {
  const full = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = parseMarkdown(raw);
  const slug = getFrontmatterString(data, "slug") ?? fileToSlug(filename);
  const title = getFrontmatterString(data, "title");
  const date = getFrontmatterString(data, "date");
  const excerpt = getFrontmatterString(data, "excerpt") ?? "";
  if (!title || !date) {
    return null;
  }
  const tags = getFrontmatterStringArray(data, "tags");
  const category = getFrontmatterString(data, "category");
  const featuredImage = getFrontmatterString(data, "featuredImage");
  return {
    slug,
    title,
    date,
    excerpt,
    content,
    tags,
    category,
    featuredImage,
  };
}

function sortByDateDesc(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllPosts(): Post[] {
  const files = listMdxFiles();
  if (files.length === 0) {
    return sortByDateDesc(samplePosts);
  }
  const fromDisk: Post[] = [];
  for (const f of files) {
    const p = readPostFromFile(f);
    if (p) fromDisk.push(p);
  }
  if (fromDisk.length === 0) {
    return sortByDateDesc(samplePosts);
  }
  return sortByDateDesc(fromDisk);
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getPostBySlug(slug: string): Post | undefined {
  const files = listMdxFiles();
  if (files.length > 0) {
    const match = files.find((f) => fileToSlug(f) === slug);
    if (match) {
      const p = readPostFromFile(match);
      if (p) return p;
    }
    for (const f of files) {
      const p = readPostFromFile(f);
      if (p?.slug === slug) return p;
    }
  }
  return samplePosts.find((p) => p.slug === slug);
}

export function getPostsByYear(year: number): Post[] {
  return getAllPosts().filter((p) => new Date(p.date).getFullYear() === year);
}

export function getPostsByMonth(year: number, month: number): Post[] {
  return getAllPosts().filter((p) => {
    const d = new Date(p.date);
    return d.getFullYear() === year && d.getMonth() + 1 === month;
  });
}

export interface ArchiveMonth {
  month: number;
  count: number;
}

export interface ArchiveYear {
  year: number;
  months: ArchiveMonth[];
}

export function getArchiveData(): ArchiveYear[] {
  const posts = getAllPosts();
  const byYear = new Map<number, Map<number, number>>();

  for (const p of posts) {
    const d = new Date(p.date);
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    if (!byYear.has(y)) byYear.set(y, new Map());
    const ym = byYear.get(y)!;
    ym.set(m, (ym.get(m) ?? 0) + 1);
  }

  const years = [...byYear.keys()].sort((a, b) => b - a);
  return years.map((year) => {
    const monthsMap = byYear.get(year)!;
    const months = [...monthsMap.entries()]
      .sort((a, b) => b[0] - a[0])
      .map(([month, count]) => ({ month, count }));
    return { year, months };
  });
}

export function getPaginatedPosts(page: number, pageSize = 10): {
  posts: Post[];
  totalPages: number;
  total: number;
} {
  const all = getAllPosts();
  const total = all.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  const posts = all.slice(start, start + pageSize);
  return { posts, totalPages, total };
}

export function getAdjacentPosts(slug: string): {
  prev?: Post;
  next?: Post;
} {
  const ordered = getAllPosts();
  const idx = ordered.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: ordered[idx + 1],
    next: ordered[idx - 1],
  };
}
