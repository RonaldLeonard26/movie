import { useState } from 'react';
import {
  addFavorite,
  getFavorite,
  removeFavorite,
} from '../utils/favoriteStorage';
import { useToast } from './useToast';

export const useFavorite = () => {
  const [favorites, setFavorites] = useState(() => getFavorite());
  const { showToast } = useToast();

  const handleAddFavorite = (movie) => {
    addFavorite(movie);
    setFavorites((prev) => [...prev, movie]);
    showToast('success add to favorite');
  };

  const handleRemoveFavorite = (id) => {
    removeFavorite(id);
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
    showToast('success remove favorite');
  };

  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  return { isFavorite, favorites, handleAddFavorite, handleRemoveFavorite };
};
