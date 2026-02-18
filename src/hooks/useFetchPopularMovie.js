import { useEffect, useState } from 'react';
import axiosInstance from '../lib/axios';

export const useFetchPopularMovie = () => {
  const [movies, setMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPopularMovie = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get('/movie/popular');
        const results = response.data.results;
        setMovies(results);

        // ambil random movie buat banner
        const randomMovie = results[Math.floor(Math.random() * results.length)];
        setBannerMovie(randomMovie);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPopularMovie();
  }, []);
  return { movies, bannerMovie, isLoading, error };
};
