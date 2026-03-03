import { RatingSkeleton } from '../skeleton/RatingSkeleton';
import { TopRatedCard } from './TopRatedCard';

export const TopRatedMovie = ({ movies, isLoading }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold">Top Rated</h2>
      <div className=" flex flex-col gap-2">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <RatingSkeleton key={index} />
            ))
          : movies.map((movie) => (
              <TopRatedCard key={movie.id} movie={movie} />
            ))}
      </div>
    </div>
  );
};
