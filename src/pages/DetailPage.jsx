import { useParams } from 'react-router-dom';
import { useFetchDetailMovie } from '../hooks/useFetchDetailMovie';
import { getYear } from '../utils/Format';
import { Heart, HeartOff } from 'lucide-react';
import { useFavorite } from '../hooks/useFavorite';
import { DetailSkeleton } from '../components/skeleton/DetailSkeleton';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/original/';

export const DetailPage = () => {
  const { movieId } = useParams();
  const { movie, isLoading, error } = useFetchDetailMovie(movieId);
  const { isFavorite, handleRemoveFavorite, handleAddFavorite } = useFavorite();

  const favorite = isFavorite(movie.id);

  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      {isLoading && <DetailSkeleton />}
      {error && <span>Terjadi Kesalahan!!</span>}
      {!isLoading && movie && (
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="w-full max-w-[180px] sm:max-w-[220px] md:w-[300px] mx-auto md:mx-0 shrink-0">
            <img
              src={`${IMAGE_BASE}${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full aspect-2/3 object-cover rounded-md"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              {movie.original_title}{' '}
              <span className="text-gray-500 font-light">
                ({getYear(movie.release_date)})
              </span>
            </h2>
            <p className="font-light text-gray-500 text-lg pb-4">
              {movie?.genres?.map((g) => g.name).join(', ')}
            </p>

            <button
              onClick={() =>
                favorite
                  ? handleRemoveFavorite(movie.id)
                  : handleAddFavorite(movie)
              }
              className={`flex items-center cursor-pointer justify-center gap-2 border rounded-2xl font-semibold p-2 transition-colors
                ${
                  favorite
                    ? ' text-rose-500 border-rose-300 hover:bg-rose-600 hover:text-white'
                    : 'border-gray-300 hover:bg-gray-500 hover:text-white'
                }
                `}
            >
              {favorite ? (
                <>
                  <HeartOff size={18} />
                  Remove Favorite
                </>
              ) : (
                <>
                  <Heart size={18} /> Add Favorite
                </>
              )}
            </button>

            <p className="pt-4 text-lg">{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};
