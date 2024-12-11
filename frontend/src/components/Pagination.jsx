import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, setPage, page }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPagesToShow = 10;

  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Calculate the range
      const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      if (startPage > 1) {
        pageNumbers.push(1, '...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        pageNumbers.push('...', totalPages);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="w-full flex justify-center gap-2">
      {pageNumbers.map((pageNumber, index) =>
        typeof pageNumber === 'number' ? (
          <button
            key={index}
            onClick={() => setPage(pageNumber)}
            className={`font-fira text-lg px-5 py-2 ${
              page === pageNumber ? 'bg-gray-300' : 'bg-white'
            }`}
          >
            {pageNumber}
          </button>
        ) : (
          <span key={index} className="font-fira text-lg px-5 py-2">
            {pageNumber}
          </span>
        )
      )}
    </div>
  );
};

export default Pagination;
