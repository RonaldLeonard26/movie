import { MovieList } from '../components/movie/MovieList';
import { useFavorite } from '../hooks/useFavorite';
import { TopRatedMovie } from '../components/movie/TopRatedMovie';

export const FavoritePage = () => {
  const { favorites } = useFavorite();
  return (
    <div className="container m-4">
      <h1>My Favorites</h1>
      <div>
        {favorites.length === 0 ? (
          <p>No Favorite movies yet.</p>
        ) : (
          <MovieList movies={favorites} />
        )}
      </div>
    </div>
  );
};
