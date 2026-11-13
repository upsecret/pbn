import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleRows, Pagination, readPage, Topics } from "../../components/editorial";
import { listArticles } from "../../lib/wp";

export const dynamic = "force-dynamic";
type Props = { searchParams: Promise<{ page?: string | string[] }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const page = readPage((await searchParams).page);
  return { title: "Latest news", alternates: { canonical: page === 1 ? "/news" : "/news?page=" + page } };
}

export default async function News({ searchParams }: Props) {
  const page = readPage((await searchParams).page);
  const { articles, pages } = await listArticles({ page });
  if (page > 1 && page > pages) notFound();
  return <div className="front-grid interior">
    <section>
      <div className="page-heading"><h1>Latest News</h1></div>
      <ArticleRows articles={articles}/>
      <Pagination page={page} pages={pages} base="/news"/>
    </section>
    <aside><Topics/></aside>
  </div>;
}
