const IMAGE_BASE = 'https://image.tmdb.org/t/p/original/';

export const MovieBanner = ({ movie }) => {
  return (
    <div
      style={{
        height: '380px',
        width: '90%',
        backgroundImage: ` linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), 
        url(${IMAGE_BASE}${movie.poster_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '20px',
      }}
      className="container rounded-2xl mb-4"
    >
      <div>
        <h1 className="font-bold text-2xl text-white">{movie.title}</h1>
        <p>{movie.overview?.slice(0, 150)}</p>
      </div>
    </div>
  );
};
