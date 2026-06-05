import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/blog/mdx-components";

interface PostContentProps {
  content: string;
}

export async function PostContent({ content }: PostContentProps) {
  const { content: body } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <div className="prose prose-bamawx max-w-none dark:prose-invert">
      {body}
    </div>
  );
}
