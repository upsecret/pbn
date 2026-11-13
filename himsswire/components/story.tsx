import Link from "next/link";
import { Cover, Dateline } from "./editorial";
import type { Article } from "../lib/wp";

export function Story({ article, preview = false }: { article: Article; preview?: boolean }) {
  return <article className="story">
    <header className="story-header">
      {preview && <p className="preview-label">Editorial preview</p>}
      {article.topic && <Link className="eyebrow" href={"/topics/" + article.topic.slug}>{article.topic.name}</Link>}
      <h1>{article.title}</h1>
      {article.summary && <p>{article.summary}</p>}
      <Dateline article={article}/>
    </header>
    {article.image && <div className="story-cover"><Cover article={article} priority/></div>}
    <div className="prose" dangerouslySetInnerHTML={{ __html: article.html }}/>
  </article>;
}
