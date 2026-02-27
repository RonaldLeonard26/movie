const FAVORITE_KEY = 'favorite_movie';

export const getFavorite = () => {
  return JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
};

export const addFavorite = (movie) => {
  const favorites = getFavorite();

  const exists = favorites.find((item) => item.id === movie.id);

  if (exists) return;

  localStorage.setItem(FAVORITE_KEY, JSON.stringify([...favorites, movie]));
};

export const removeFavorite = (id) => {
  const favorites = getFavorite().filter((movie) => movie.id !== id);
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites));
};
