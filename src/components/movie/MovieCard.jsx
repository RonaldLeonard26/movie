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
      className="flex flex-col items-center justify-center shadow-sm rounded-lg transition-all hover:bg-gray-200 cursor-pointer"
    >
      <div className="p-2">
        <img
          src={`${IMAGE_BASE}${movie.poster_path}`}
          alt=""
          className="rounded-md object-cover"
          width={200}
          height={50}
        />
      </div>

      <div className="flex px-4 flex-col space-y-2 w-full">
        <p className="font-semibold truncate">{movie.title}</p>
        <div className="flex items-center justify-between pb-2 ">
          <p>{formatRating(movie.vote_average)}</p>
          <button>
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
};
