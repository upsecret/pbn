import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Story } from "../../components/story";
import { getPreview } from "../../lib/wp";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Editorial preview", robots: { index: false, follow: false } };

export default async function Preview({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const { token } = await searchParams;
  const article = typeof token === "string" ? await getPreview(token) : null;
  if (!article) notFound();
  return <Story article={article} preview/>;
}
