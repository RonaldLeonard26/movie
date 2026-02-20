import { useEffect, useState } from 'react';
import axiosInstance from '../lib/axios';

export const useFetchGenres = () => {
  const [genres, setGenres] = useState([]);
  const [isLoadingGenres, setIsLoadingGenres] = useState(false);

  useEffect(() => {
    const getGenres = async () => {
      setIsLoadingGenres(true);
      try {
        const response = await axiosInstance.get('/genre/movie/list');
        const results = response.data.genres;
        setGenres(results.slice(0, 9));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingGenres(false);
      }
    };
    getGenres();
  }, []);

  return { genres, isLoadingGenres };
};
