import { useEffect, useState } from 'react';
import axiosInstance from '../lib/axios';

export const useFetchTopRatedMovie = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [isLoadingTopRated, setIsLoadingTopRated] = useState(false);

  useEffect(() => {
    const getTopRatedMovie = async () => {
      setIsLoadingTopRated(true);
      try {
        const response = await axiosInstance.get('/movie/top_rated');
        const results = response.data.results;
        setTopRatedMovies(results.slice(0, 4));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingTopRated(false);
      }
    };
    getTopRatedMovie();
  }, []);
  return { topRatedMovies, isLoadingTopRated };
};
