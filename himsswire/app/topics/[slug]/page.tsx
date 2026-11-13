import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleRows, Pagination, readPage, Topics } from "../../../components/editorial";
import { topics } from "../../../lib/site";
import { listArticles } from "../../../lib/wp";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string | string[] }> };

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);
  if (!topic) return {};
  const page = readPage((await searchParams).page);
  return { title: topic.name, description: topic.description, alternates: { canonical: "/topics/" + slug + (page === 1 ? "" : "?page=" + page) } };
}

export default async function TopicPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);
  if (!topic) notFound();
  const page = readPage((await searchParams).page);
  const { articles, pages } = await listArticles({ page, topic: slug });
  if (page > 1 && page > pages) notFound();
  return <div className="front-grid interior">
    <section>
      <div className="page-heading"><h1>{topic.name}</h1><p>{topic.description}</p></div>
      <ArticleRows articles={articles}/>
      <Pagination page={page} pages={pages} base={"/topics/" + slug}/>
    </section>
    <aside><Topics/></aside>
  </div>;
}
