const IMAGE_BASE = 'https://image.tmdb.org/t/p/original/';

export const MovieBanner = ({ movie, isLoading }) => {
  if (isLoading) {
    return (
      <div className="rounded-2xl h-72 md:h-86 bg-gray-200 animate-pulse" />
    );
  }
  if (!movie) return null;
  return (
    <div
      className=" rounded-2xl h-72 md:h-86 bg-cover bg-center flex items-end p-4 transition-all duration-500"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), 
        url(${IMAGE_BASE}${movie.backdrop_path})`,
      }}
    >
      <div className="max-w-xl">
        <h1 className="font-bold text-2xl text-white">{movie.title}</h1>
        <p className="text-xl font-light text-gray-400">
          {movie.overview?.slice(0, 200)}
        </p>
      </div>
    </div>
  );
};
