import { useParams } from 'react-router-dom';
import { useFetchDetailMovie } from '../hooks/useFetchDetailMovie';
import { getYear } from '../utils/Format';
import { Heart, HeartOff } from 'lucide-react';
import { useFavorite } from '../hooks/useFavorite';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/original/';

export const DetailPage = () => {
  const { movieId } = useParams();
  const { movie, isLoading, error } = useFetchDetailMovie(movieId);
  const { isFavorite, handleRemoveFavorite, handleAddFavorite } = useFavorite();

  const favorite = isFavorite(movie.id);

  return (
    <div className="container m-4">
      {isLoading && <span>Loading...</span>}
      {error && <span>Terjadi Kesalahan!!</span>}
      {movie && (
        <div className="flex justify-center gap-6">
          <div>
            <img
              src={`${IMAGE_BASE}${movie.poster_path}`}
              alt={movie.original_title}
              width={500}
              className="rounded-md"
            />
          </div>
          <div className="space-y-2">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">
                {movie.original_title}{' '}
                <span className="text-gray-500 font-light">
                  ({getYear(movie.release_date)})
                </span>
              </h2>
              <p className="font-light text-gray-500 text-lg">
                {movie?.genres?.map((g) => g.name).join(', ')}
              </p>
            </div>
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
