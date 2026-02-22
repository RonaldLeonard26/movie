import { Heart } from 'lucide-react';
import { formatRating } from '../../utils/Format';
import { useNavigate } from 'react-router-dom';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/original/';

export const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${movie.id}`);
  };
  return (
    <div
      onClick={goToDetail}
      key={movie.id}
      className=" content-center shadow-sm rounded-lg transition-all hover:scale-105 cursor pointer"
    >
      <img
        src={`${IMAGE_BASE}${movie.poster_path}`}
        alt=""
        className="rounded-md"
        width={200}
        height={50}
      />

      <div className="flex pt-2 flex-col space-y-2">
        <p className="font-semibold">{movie.title}</p>
        <div className="flex items-center justify-between min-w-full">
          <p>{formatRating(movie.vote_average)}</p>
          <button>
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
};
