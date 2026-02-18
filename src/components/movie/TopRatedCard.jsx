const IMAGE_BASE = 'https://image.tmdb.org/t/p/original/';

export const TopRatedCard = ({ movie }) => {
  return (
    <div className="flex items-start gap-2">
      <img
        src={`${IMAGE_BASE}${movie.poster_path}`}
        alt={movie.title}
        width={100}
        height={100}
        className="rounded-lg"
      />
      <div className="flex flex-col gap-4 font-normal">
        <p>{movie.title}</p>
        <p>{movie.vote_average}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};
