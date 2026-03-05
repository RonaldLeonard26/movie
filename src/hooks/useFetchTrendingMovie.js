import { useEffect, useState } from 'react';
import axiosInstance from '../lib/axios';

export const useFetchTrendingMovie = (page) => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovie = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get(
          `/trending/movie/day?page=${page}`,
        );
        const results = response.data.results;
        setMovies(results.slice(0, 12));
        setTotalPages(response.data.total_pages);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovie();
  }, [page]);

  return { movies, isLoading, error, totalPages };
};
