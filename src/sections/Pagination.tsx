"use client";

import LoadMore from "@/components/LoadMore";
import ResetSkip from "@/components/ResetSkip";

const Pagination = () => {
  return (
    <section className="space-x-4">
      <LoadMore />
      <ResetSkip />
    </section>
  );
};

export default Pagination;
