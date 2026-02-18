import { Heart } from 'lucide-react';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/original/';
export const MovieCard = ({ movie }) => {
  return (
    <div
      key={movie.id}
      className="p-2 shadow-sm rounded-lg transition-all hover:scale-105 cursor pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt=""
        className="rounded-md"
        width={180}
        height={50}
      />

      <div className="flex items-start pt-2 flex-col space-y-2">
        <p className="font-semibold">{movie.title}</p>
        <div className="flex items-center justify-between w-full">
          <p>{movie.vote_average}</p>
          <button>
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
};
