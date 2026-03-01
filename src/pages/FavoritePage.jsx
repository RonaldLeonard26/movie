import { MovieList } from '../components/movie/MovieList';
import { useFavorite } from '../hooks/useFavorite';

export const FavoritePage = () => {
  const { favorites } = useFavorite();
  return (
    <div className="max-w-7xl mx-auto p-4">
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
