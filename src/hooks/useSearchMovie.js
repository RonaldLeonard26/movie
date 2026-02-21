import { useEffect, useState } from 'react';
import axiosInstance from '../lib/axios';
import { useDebounce } from './useDebounce';

export const useSearchMovie = (search) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    if (!debounceSearch) {
      setMovies([]);
      return;
    }

    const getSearch = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(
          `/search/movie?query=${debounceSearch}`,
        );
        setMovies(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getSearch();
  }, [debounceSearch]);
  return { movies, isLoading, error };
};
