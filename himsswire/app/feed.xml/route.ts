import { xml, xmlResponse } from "../../lib/feed";
import { description, publication, siteUrl } from "../../lib/site";
import { listArticles } from "../../lib/wp";

export const dynamic = "force-dynamic";

export async function GET() {
  const { articles } = await listArticles({ limit: 25 });
  const items = articles.map((article) => {
    const url = xml(siteUrl + article.path);
    return "<item><title>" + xml(article.title) + "</title><link>" + url + "</link><guid>" + url + "</guid><description>"
      + xml(article.summary) + "</description><pubDate>" + new Date(article.published).toUTCString() + "</pubDate></item>";
  });
  return xmlResponse('<rss version="2.0"><channel><title>' + publication + "</title><link>" + xml(siteUrl)
    + "</link><description>" + xml(description) + "</description>" + items.join("") + "</channel></rss>", "application/rss+xml");
}
