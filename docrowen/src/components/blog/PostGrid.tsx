import { WPPost } from "@/lib/types";
import PostCard from "./PostCard";

export default function PostGrid({ posts }: { posts: WPPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
