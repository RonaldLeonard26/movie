import { useState } from 'react';
import { MovieList } from '../components/movie/MovieList';
import { useFetchTrendingMovie } from '../hooks/useFetchTrendingMovie';
import { Pagination } from '../components/Pagination';

export const TrendingPage = () => {
  const [page, setPage] = useState(1);
  const { movies, isLoading, error, totalPages } = useFetchTrendingMovie(page);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-lg font-light text-gray-500 pb-2">
        Trending today :
      </h1>
      {error && <h2>Terjadi Kesalahan</h2>}
      <MovieList movies={movies} isLoading={isLoading} />
      <Pagination page={page} totalPages={totalPages} onChangePage={setPage} />
    </div>
  );
};
