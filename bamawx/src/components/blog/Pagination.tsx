import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath = "/",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const prev = currentPage > 1 ? currentPage - 1 : null;
  const next = currentPage < totalPages ? currentPage + 1 : null;

  const href = (page: number) =>
    page <= 1 ? basePath : `${basePath}?page=${page}`;

  const btn = cn(buttonVariants({ variant: "outline", size: "sm" }));

  return (
    <nav
      className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row"
      aria-label="Pagination"
    >
      <div className="text-sm text-muted-foreground">
        Page <span className="font-medium text-foreground">{currentPage}</span>{" "}
        of <span className="font-medium text-foreground">{totalPages}</span>
      </div>
      <div className="flex gap-2">
        {prev ? (
          <Link href={href(prev)} prefetch className={btn}>
            Previous
          </Link>
        ) : (
          <span className={cn(btn, "pointer-events-none opacity-50")} aria-disabled>
            Previous
          </span>
        )}
        {next ? (
          <Link href={href(next)} prefetch className={btn}>
            Next
          </Link>
        ) : (
          <span className={cn(btn, "pointer-events-none opacity-50")} aria-disabled>
            Next
          </span>
        )}
      </div>
    </nav>
  );
}
