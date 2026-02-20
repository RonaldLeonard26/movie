import { MovieCard } from './MovieCard';
import { TopRatedCard } from './TopRatedCard';

export const TopRatedMovie = ({ movies, isLoading }) => {
  return (
    <div className="flex flex-col gap-2 ml-2">
      <h2 className="font-semibold p-2">Top Rated</h2>
      <div className=" flex flex-col gap-2">
        {!isLoading &&
          movies.map((movie) => {
            return <TopRatedCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
};
