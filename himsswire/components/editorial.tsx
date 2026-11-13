import Link from "next/link";
import { formatDate, topics } from "../lib/site";
import type { Article } from "../lib/wp";

export function Cover({ article, priority = false }: { article: Article; priority?: boolean }) {
  if (!article.image) return <span className="cover-empty" aria-hidden="true"/>;
  return <img src={article.image.url} alt={article.image.alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async"/>;
}

export function Dateline({ article }: { article: Article }) {
  return <time className="dateline" dateTime={article.published}>{formatDate(article.published)}</time>;
}

export function ArticleRows({ articles, compact = false }: { articles: Article[]; compact?: boolean }) {
  if (!articles.length) return <p className="empty">No articles found.</p>;
  return <ol className={compact ? "headlines" : "article-rows"}>
    {articles.map((article) => <li key={article.id}>
      {!compact && article.image && <Link className="row-photo" href={article.path} tabIndex={-1} aria-hidden="true"><Cover article={article}/></Link>}
      <div>
        {article.topic && <Link className="eyebrow" href={"/topics/" + article.topic.slug}>{article.topic.name}</Link>}
        <h3><Link href={article.path}>{article.title}</Link></h3>
        {!compact && article.summary && <p>{article.summary}</p>}
        <Dateline article={article}/>
      </div>
    </li>)}
  </ol>;
}

export function Topics() {
  return <nav className="topics" aria-label="Explore by topic">
    <h2>Explore Topics</h2>
    <ul>{topics.map((topic) => <li key={topic.slug}><Link href={"/topics/" + topic.slug}>{topic.name}<span aria-hidden="true">↗</span></Link></li>)}</ul>
  </nav>;
}

export function Pagination({ page, pages, base, query }: { page: number; pages: number; base: string; query?: string }) {
  if (pages < 2) return null;
  function href(n: number) {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (n !== 1) params.set("page", String(n));
    return base + (params.size ? "?" + params : "");
  }
  return <nav className="pagination" aria-label="Pagination">
    {page > 1 && <Link href={href(page - 1)}>← Previous</Link>}
    <span>Page {page} of {pages}</span>
    {page < pages && <Link href={href(page + 1)}>Next →</Link>}
  </nav>;
}

export function readPage(value: string | string[] | undefined) {
  return typeof value === "string" && /^[1-9]\d{0,5}$/.test(value) ? Number(value) : 1;
}
