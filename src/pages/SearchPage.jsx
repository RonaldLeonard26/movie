import { useSearchParams } from 'react-router-dom';
import { useSearchMovie } from '../hooks/useSearchMovie';
import { MovieList } from '../components/movie/MovieList';

export const SearchPage = () => {
  const [params] = useSearchParams();
  const query = params.get('q');

  const { movies, isLoading } = useSearchMovie(query);
  return (
    <div>
      <h2>Search result : {query}</h2>
      <MovieList movies={movies} isLoading={isLoading} />
    </div>
  );
};
