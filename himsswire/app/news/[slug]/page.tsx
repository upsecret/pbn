import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Story } from "../../../components/story";
import { publication, siteUrl } from "../../../lib/site";
import { getArticle } from "../../../lib/wp";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle((await params).slug);
  if (!article) return { robots: { index: false } };
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: article.path },
    openGraph: {
      type: "article",
      url: article.path,
      title: article.title,
      description: article.summary,
      publishedTime: article.published,
      modifiedTime: article.updated,
      images: article.image ? [article.image] : [],
    },
  };
}

export default async function NewsArticle({ params }: Props) {
  const article = await getArticle((await params).slug);
  if (!article) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    url: siteUrl + article.path,
    mainEntityOfPage: siteUrl + article.path,
    datePublished: article.published,
    dateModified: article.updated,
    image: article.image?.url,
    articleSection: article.topic?.name,
    author: { "@type": "Organization", name: publication, url: siteUrl + "/about" },
    publisher: { "@type": "Organization", name: publication, url: siteUrl },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}/>
    <Story article={article}/>
  </>;
}
