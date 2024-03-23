import { useState } from "react";

// Custom hook for pagination
const usePagination = (transactionsData, itemsPerPage) => {
  // Calculate total number of items
  const totalItems = transactionsData.length;
  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate array of page numbers
  const pages = [...Array(totalPages + 1).keys()];
  pages.shift();

  // Calculate index of last and first item on the current page
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;

  // Ensure current page does not exceed total number of pages
  if (pages.length > 0 && currentPage > pages.length) {
    setCurrentPage(pages.length);
  }

  // Handler for next page
  const nextHandler = () => {
    setCurrentPage((curr) => curr + 1);
  };

  // Handler for previous page
  const previousHandler = () => {
    setCurrentPage((curr) => curr - 1);
  };

  // Return sliced data for current page, list of pages, and handlers
  return [
    transactionsData.slice(firstItem, lastItem),
    pages,
    nextHandler,
    previousHandler,
    currentPage,
    setCurrentPage,
  ];
};

export default usePagination;
