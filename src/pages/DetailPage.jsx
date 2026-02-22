import { useParams } from 'react-router-dom';
import { useFetchDetailMovie } from '../hooks/useFetchDetailMovie';
import { getYear } from '../utils/Format';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/original/';

export const DetailPage = () => {
  const { movieId } = useParams();
  const { movie, isLoading, error } = useFetchDetailMovie(movieId);
  console.log(movie);

  return (
    <div className="container m-4">
      {isLoading && <span>Loading...</span>}
      {error && <span>Terjadi Kesalahan!!</span>}
      {movie && (
        <div className="flex justify-center gap-2">
          <div>
            <img
              src={`${IMAGE_BASE}${movie.poster_path}`}
              alt={movie.original_title}
              width={500}
              className="rounded-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              {movie.original_title}{' '}
              <span className="text-gray-500 font-light">
                ({getYear(movie.release_date)})
              </span>
            </h2>
            <p className="font-light text-gray-500 text-lg">
              {movie?.genres?.map((g) => g.name).join(', ')}
            </p>
            <p className="text-lg">{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};
