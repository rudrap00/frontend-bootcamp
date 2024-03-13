import { useState } from "react";

const usePagination = (transactionsData, itemsPerPage) => {
  const totalItems = transactionsData.length;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = [...Array(totalPages + 1).keys()];
  pages.shift();

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;

  return [
    transactionsData.slice(firstItem, lastItem),
    pages,
    currentPage,
    setCurrentPage,
  ];
};

export default usePagination;
