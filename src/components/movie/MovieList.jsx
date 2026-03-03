import { CardSkeleton } from '../skeleton/CardSkeleton';
import { MovieCard } from './MovieCard';

export const MovieList = ({ movies, isLoading }) => {
  return (
    <section className=" grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 ">
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </section>
  );
};
