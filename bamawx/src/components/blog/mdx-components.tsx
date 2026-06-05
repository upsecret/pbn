import type { MDXProvider } from "@mdx-js/react";
import type { ComponentProps } from "react";

import { MdxImage } from "@/components/blog/mdx-image";
import { cn } from "@/lib/utils";

type MdxComponents = NonNullable<ComponentProps<typeof MDXProvider>["components"]>;

export const mdxComponents: MdxComponents = {
  img: (props) => <MdxImage {...props} />,
  blockquote: ({ children, className, ...props }) => (
    <blockquote
      className={cn(
        "my-6 border-l-4 border-bama-sky pl-4 italic text-muted-foreground dark:border-bama-sky",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),
  pre: ({ children, className, ...props }) => (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-lg border border-border bg-muted/80 p-4 text-sm dark:bg-muted/40",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, className, ...props }) => {
    const isBlock = typeof className === "string" && className.includes("language-");
    if (isBlock) {
      return (
        <code className={cn("font-mono text-[0.9em]", className)} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className={cn(
          "rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.9em] font-medium",
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  },
};
