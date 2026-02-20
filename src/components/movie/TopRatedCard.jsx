import { formatRating, getYear } from '../../utils/Format';
import { StarRating } from './StarRating';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/original/';

export const TopRatedCard = ({ movie }) => {
  return (
    <div className="flex items-start gap-2 shadow-sm rounded-lg p-2">
      <img
        src={`${IMAGE_BASE}${movie.poster_path}`}
        alt={movie.title}
        width={100}
        height={100}
        className="rounded-lg"
      />
      <div className="flex flex-col gap-4 ">
        <p className="font-semibold">{movie.title}</p>
        <p>{getYear(movie.release_date)}</p>
        <div className="flex items-center gap-2">
          <p>{formatRating(movie.vote_average)}</p>
          <StarRating rating={movie.vote_average} />
        </div>
      </div>
    </div>
  );
};
