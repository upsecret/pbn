import { Metadata } from "next";
import { getPosts } from "@/lib/wordpress";
import PostGrid from "@/components/blog/PostGrid";
import Pagination from "@/components/blog/Pagination";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read our latest articles on health, wellness, and consulting.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || "1", 10));
  const { data: posts, totalPages } = await getPosts(currentPage, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-center mb-12">
        Our news
      </h1>

      <PostGrid posts={posts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
