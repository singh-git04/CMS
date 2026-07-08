import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-[var(--bg-main)] border-[var( --text-white)] p-4 shadow-sm md:flex-row">

      {/* Left */}
      <p className="text-sm text[var(--text-primary)]">
        Total Employees :
        <span className="ml-1 font-semibold">
          {totalItems}
        </span>
      </p>

      {/* Right */}
      <div className="flex items-center gap-2">

        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === 1}
          leftIcon={<ChevronLeft size={16} />}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </Button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-10 w-10 rounded-lg text-sm font-medium transition
              ${
                currentPage === page
                  ? "bg-indigo-600 text-white"
                  : "border border-gray-300 hover:bg-[gray-100]"
              }`}
          >
            {page}
          </button>
        ))}

        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === totalPages}
          rightIcon={<ChevronRight size={16} />}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </Button>

      </div>
    </div>
  );
};

export default Pagination;