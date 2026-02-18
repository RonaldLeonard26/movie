import { MovieCard } from './MovieCard';

export const MovieList = ({ movies, isLoading }) => {
  return (
    <section className=" flex flex-wrap gap-4">
      {!isLoading &&
        movies?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
    </section>
  );
};
