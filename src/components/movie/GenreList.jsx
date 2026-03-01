import { Genre } from './Genre';

export const GenreList = ({ genres, isLoading }) => {
  return (
    <div>
      <h2 className="font-semibold">Genre</h2>
      <div className="grid grid-cols-3 gap-2">
        {!isLoading &&
          genres.map((genre) => {
            return <Genre key={genre.id} genre={genre} />;
          })}
      </div>
    </div>
  );
};
