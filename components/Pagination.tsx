"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  previousPageHref: string | null;
  nextPageHref: string | null;
}

const Pagination = ({
  currentPage,
  totalPages,
  previousPageHref,
  nextPageHref,
}: PaginationProps) => {
  return (
    <div className="border border-primary flex justify-between bg-white rounded-xl p-4 items-center mt-5">
      <div>
        <p>
          Showing page {currentPage} of {totalPages}
        </p>
      </div>
      <div>
        {previousPageHref && (
          <Link href={previousPageHref}>
            <Button className="rounded-sm text-primary bg-white border border-stroke shadow-sm">
              Previous
            </Button>
          </Link>
        )}
        {nextPageHref && (
          <Link href={nextPageHref}>
            <Button
              disabled={currentPage === totalPages}
              className="ml-2 btn-basic rounded-sm"
            >
              Next
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
