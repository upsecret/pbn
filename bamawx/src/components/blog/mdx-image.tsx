"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function MdxImage({ src, alt, className, width, height }: ImgProps) {
  const [open, setOpen] = React.useState(false);
  const url = typeof src === "string" ? src : "";

  if (!url) return null;

  const numericWidth = typeof width === "number" ? width : Number(width) || 1200;
  const numericHeight = typeof height === "number" ? height : Number(height) || 675;

  return (
    <>
      <button
        type="button"
        className="my-6 block w-full max-w-3xl cursor-zoom-in rounded-lg border border-border bg-muted/30 p-1 text-left transition hover:shadow-md"
        onClick={() => setOpen(true)}
        aria-label={alt ? `Enlarge image: ${alt}` : "Enlarge image"}
      >
        <span className="relative block aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={url}
            alt={alt ?? ""}
            width={numericWidth}
            height={numericHeight}
            className={cn("h-full w-full object-contain", className)}
            unoptimized={url.startsWith("http")}
            sizes="(max-width: 768px) 100vw, 42rem"
          />
        </span>
      </button>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-label="Close image"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={url}
            alt={alt ?? ""}
            className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
          />
        </button>
      ) : null}
    </>
  );
}
