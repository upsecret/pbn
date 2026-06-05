import matter from "gray-matter";

export interface ParsedMarkdown {
  data: Record<string, unknown>;
  content: string;
  excerpt?: string;
}

/**
 * Parse MD/MDX with optional YAML frontmatter using gray-matter.
 */
export function parseMarkdown(raw: string): ParsedMarkdown {
  const { data, content, excerpt } = matter(raw);
  return {
    data: data as Record<string, unknown>,
    content,
    excerpt: excerpt ?? undefined,
  };
}

export function getFrontmatterString(data: Record<string, unknown>, key: string): string | undefined {
  const v = data[key];
  return typeof v === "string" ? v : undefined;
}

export function getFrontmatterStringArray(data: Record<string, unknown>, key: string): string[] {
  const v = data[key];
  if (Array.isArray(v) && v.every((x) => typeof x === "string")) {
    return v as string[];
  }
  return [];
}
