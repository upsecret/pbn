import type { Metadata } from "next";
import Link from "next/link";
import { ArticleRows, Cover, Dateline, Topics } from "../components/editorial";
import { description, publication } from "../lib/site";
import { listArticles } from "../lib/wp";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { title: publication + " | Healthcare Technology News", description, url: "/", type: "website" },
};

export default async function Home() {
  const { articles } = await listArticles({ limit: 9 });
  const [lead, ...latest] = articles;
  return (
    <>
      <section className="front-grid" aria-label="Top stories">
        <div className="lead-column">
          <div className="section-top"><h1>Healthcare IT News</h1><Link href="/news">All stories <span aria-hidden="true">↗</span></Link></div>
          {lead ? (
            <article className="lead-story">
              <Link className="lead-photo" href={lead.path} tabIndex={-1} aria-hidden="true"><Cover article={lead} priority /></Link>
              <div className="lead-copy">
                {lead.topic && <Link className="eyebrow" href={"/topics/" + lead.topic.slug}>{lead.topic.name}</Link>}
                <h2><Link href={lead.path}>{lead.title}</Link></h2>
                {lead.summary && <p>{lead.summary}</p>}
                <Dateline article={lead}/>
              </div>
            </article>
          ) : <p className="empty">There are no published articles yet.</p>}
        </div>
        <aside className="front-aside" aria-label="Headlines and topics">
          <div className="section-top"><h2>Latest Headlines</h2></div>
          <ArticleRows articles={latest.slice(0, 4)} compact />
          <Topics />
        </aside>
      </section>
      {latest.length > 4 && (
        <section className="more-stories" aria-labelledby="more-heading">
          <div className="section-top"><h2 id="more-heading">More Coverage</h2><Link href="/news">Browse all articles <span aria-hidden="true">↗</span></Link></div>
          <ArticleRows articles={latest.slice(4)} />
        </section>
      )}
    </>
  );
}
