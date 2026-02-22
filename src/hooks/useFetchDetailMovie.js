import { useEffect, useState } from 'react';
import axiosInstance from '../lib/axios';

export const useFetchDetailMovie = (movieId) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetailMovie = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get(`/movie/${movieId}`);

        setMovie(response.data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getDetailMovie();
  }, [movieId]);
  return { movie, isLoading, error };
};
