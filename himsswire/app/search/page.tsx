import type { Metadata } from "next";
import Form from "next/form";
import { ArticleRows, Pagination, readPage } from "../../components/editorial";
import { listArticles } from "../../lib/wp";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Search", robots: { index: false } };
type Props = { searchParams: Promise<{ q?: string | string[]; page?: string | string[] }> };

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q.trim().slice(0, 160) : "";
  const page = readPage(params.page);
  const results = query ? await listArticles({ search: query, page }) : null;
  return <section className="search-page">
    <div className="page-heading"><h1>Search</h1></div>
    <Form action="/search" className="search-form">
      <label htmlFor="q" className="sr-only">Search articles</label>
      <input id="q" name="q" type="search" maxLength={160} placeholder="Search articles" defaultValue={query} required/>
      <button type="submit">Search</button>
    </Form>
    {results && <>
      <h2 className="result-heading">Results for “{query}”</h2>
      <ArticleRows articles={results.articles}/>
      <Pagination page={page} pages={results.pages} base="/search" query={query}/>
    </>}
  </section>;
}
