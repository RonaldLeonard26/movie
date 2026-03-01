import { MovieCard } from './MovieCard';

export const MovieList = ({ movies, isLoading }) => {
  return (
    <section className=" grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 ">
      {!isLoading &&
        movies?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
    </section>
  );
};
