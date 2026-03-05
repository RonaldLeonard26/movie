import { useSearchParams } from 'react-router-dom';
import { useSearchMovie } from '../hooks/useSearchMovie';
import { MovieList } from '../components/movie/MovieList';

export const SearchPage = () => {
  const [params] = useSearchParams();
  const query = params.get('q');

  const { movies, isLoading } = useSearchMovie(query);
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="font-light text-gray-600 text-lg pb-2">
        Search result : {query}
      </h2>
      {!isLoading && movies.length === 0 && <p>Movie Not Found</p>}
      <MovieList movies={movies} isLoading={isLoading} />
    </div>
  );
};
