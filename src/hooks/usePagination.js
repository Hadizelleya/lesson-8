import React, { useMemo, useState } from "react";

export default function usePagination(initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const paginationData = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
      goToPage: (page) => setCurrentPage(page),
      goToNextPage: () => setCurrentPage((prev) => prev + 1),
      goToPrevPage: () => setCurrentPage((prev) => prev - 1),
      goToFirstPage: () => setCurrentPage(1),
      goToLastPage: (totalPages) => setCurrentPage(totalPages),
      resetPagination: () => setCurrentPage(1),
    }),
    [currentPage]
  );

  return paginationData;
}

export const useTMDBPagination = (
  baseUrl,
  apiKey,
  endpoint,
  initialPage = 1
) => {
  const pagination = usePagination(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const apiUrl = `${baseUrl}/${endpoint}?api_key=${apiKey}&page=${pagination.currentPage}`;

  const updatePaginationInfo = (data) => {
    if (data && typeof data === "object") {
      setTotalPages(data.totalPages || 0);
      setTotalResults(data.totalResults || 0);
    }
  };

  const paginationInfo = useMemo(
    () => ({
      ...pagination,
      totalPages,
      totalResults,
      hasNextPage: pagination.currentPage < totalPages,
      hasPreviousPage: pagination.currentPage < 1,
      updatePaginationInfo,
      apiUrl,
    }),
    [pagination, totalPages, totalResults, apiUrl]
  );

  return paginationInfo;
};
