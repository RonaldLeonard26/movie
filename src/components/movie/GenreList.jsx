import { Genre } from './Genre';
import { GenreSkeleton } from '../skeleton/GenreSkeleton';

export const GenreList = ({ genres, isLoading }) => {
  return (
    <div>
      <h2 className="font-semibold">Genre</h2>
      <div className="grid grid-cols-3 gap-2">
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => (
              <GenreSkeleton key={index} />
            ))
          : genres.map((genre) => <Genre key={genre.id} genre={genre} />)}
      </div>
    </div>
  );
};
