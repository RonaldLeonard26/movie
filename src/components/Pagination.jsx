export const Pagination = ({ page, totalPages, onChangePage }) => {
  const pages = [];

  const startPage = Math.max(page - 1, 1);
  const endPage = Math.min(page + 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* prev */}
      <button
        className=" border cursor-pointer border-gray-500 px-2 rounded-lg disabled:opacity-40 disabled:cursor-default"
        disabled={page === 1}
        onClick={() => onChangePage(page - 1)}
      >
        Prev
      </button>

      {/* page number */}
      {pages.map((p) => (
        <button
          className={`px-3 cursor-pointer  ${page === p ? 'bg-gray-500 rounded-lg text-white' : ''}`}
          key={p}
          onClick={() => onChangePage(p)}
        >
          {p}
        </button>
      ))}

      {/* next */}
      <button
        disabled={page === totalPages}
        onClick={() => onChangePage(page + 1)}
        className="px-2 border cursor-pointer border-gray-500 rounded-lg disabled:opacity-40 disabled:cursor-default"
      >
        Next
      </button>
    </div>
  );
};
