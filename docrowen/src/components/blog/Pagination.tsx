"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();

  const goToPage = (page: number) => {
    router.push(`/blog?page=${page}`);
  };

  const pages: number[] = [];
  for (let i = 1; i <= Math.min(totalPages, 3); i++) pages.push(i);
  if (totalPages > 3 && !pages.includes(totalPages)) {
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>

      {pages.map((page, i) => (
        <span key={page} className="flex items-center">
          {i > 0 && pages[i - 1] !== page - 1 && (
            <span className="px-2 text-gray-400">...</span>
          )}
          <button
            onClick={() => goToPage(page)}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-primary text-white"
                : "hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {page}
          </button>
        </span>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </div>
  );
}
