"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { IconFacebook } from "@/components/icons/social";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { Post } from "@/types";

interface PostMetaProps {
  post: Post;
  shareUrl: string;
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function PostMeta({ post, shareUrl }: PostMetaProps) {
  const [copied, setCopied] = React.useState(false);

  const encoded = encodeURIComponent(shareUrl);
  const titleEnc = encodeURIComponent(post.title);
  const twitterHref = `https://twitter.com/intent/tweet?url=${encoded}&text=${titleEnc}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const shareBtn = cn(buttonVariants({ variant: "outline", size: "sm" }));

  return (
    <div className="rounded-xl border border-border bg-card/60 p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Published:</span>{" "}
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          {post.category ? (
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-foreground">Category:</span>
              <Badge variant="outline">{post.category}</Badge>
            </p>
          ) : null}
          {post.tags.length > 0 ? (
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-foreground">Tags:</span>
              {post.tags.map((t) => (
                <Badge key={t} variant="secondary" className="font-normal">
                  {t}
                </Badge>
              ))}
            </p>
          ) : null}
        </div>
        <Separator className="sm:hidden" />
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-foreground">Share:</span>
          <a
            href={twitterHref}
            target="_blank"
            rel="noopener noreferrer"
            className={shareBtn}
          >
            X / Twitter
          </a>
          <a
            href={facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(shareBtn, "gap-1.5")}
          >
            <IconFacebook className="size-4" />
            Facebook
          </a>
          <Button type="button" variant="outline" size="sm" onClick={copyLink}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Copied" : "Copy link"}
          </Button>
        </div>
      </div>
    </div>
  );
}
