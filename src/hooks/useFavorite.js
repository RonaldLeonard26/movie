import { useState } from 'react';
import {
  addFavorite,
  getFavorite,
  removeFavorite,
} from '../utils/favoriteStorage';

export const useFavorite = () => {
  const [favorites, setFavorites] = useState(() => getFavorite());

  const handleAddFavorite = (movie) => {
    addFavorite(movie);
    setFavorites((prev) => [...prev, movie]);
  };

  const handleRemoveFavorite = (id) => {
    removeFavorite(id);
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  return { isFavorite, favorites, handleAddFavorite, handleRemoveFavorite };
};
