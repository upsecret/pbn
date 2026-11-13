import { listArticles } from "./wp";

export async function allArticles() {
  const first = await listArticles({ limit: 100 });
  const articles = [...first.articles];
  for (let page = 2; page <= first.pages; page++) {
    articles.push(...(await listArticles({ limit: 100, page })).articles);
  }
  return articles;
}

export function xml(value: string) {
  const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" };
  return value.replace(/[&<>"']/g, (char) => entities[char]);
}

export function xmlResponse(body: string, type: string) {
  return new Response('<?xml version="1.0" encoding="UTF-8"?>' + body, {
    headers: { "Content-Type": type + "; charset=UTF-8", "Cache-Control": "private, no-store, max-age=0" },
  });
}
