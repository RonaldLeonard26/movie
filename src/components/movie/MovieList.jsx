import { MovieCard } from './MovieCard';

export const MovieList = ({ movies, isLoading }) => {
  return (
    <section className=" container grid grid-cols-4 gap-4 ">
      {!isLoading &&
        movies?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
    </section>
  );
};
