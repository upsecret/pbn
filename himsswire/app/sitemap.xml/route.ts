import { allArticles, xml, xmlResponse } from "../../lib/feed";
import { siteUrl, topics } from "../../lib/site";

export const dynamic = "force-dynamic";

export async function GET() {
  const articles = await allArticles();
  const paths = ["/", "/news", "/about", ...topics.map((topic) => "/topics/" + topic.slug)];
  const entries = [
    ...paths.map((path) => "<url><loc>" + xml(siteUrl + path) + "</loc></url>"),
    ...articles.map((article) => "<url><loc>" + xml(siteUrl + article.path) + "</loc><lastmod>" + xml(article.updated) + "</lastmod></url>"),
  ];
  return xmlResponse('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries.join("") + "</urlset>", "application/xml");
}
