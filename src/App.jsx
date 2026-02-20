import { Navbar } from './components/Navbar';
import { GenreList } from './components/movie/GenreList';
import { MovieBanner } from './components/movie/MovieBanner';
import { MovieList } from './components/movie/MovieList';
import { TopRatedMovie } from './components/movie/TopRatedMovie';
import { useFetchGenres } from './hooks/useFetchGenres';
import { useFetchPopularMovie } from './hooks/useFetchPopularMovie';
import { useFetchTopRatedMovie } from './hooks/useFetchTopRatedMovie';

function App() {
  const { movies, isLoading, bannerMovie } = useFetchPopularMovie();
  const { topRatedMovies, isLoadingTopRated } = useFetchTopRatedMovie();
  const { genres, isLoadingGenres } = useFetchGenres();

  return (
    <>
      <div className="max-w-screen">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] m-4 ">
          <div>
            <MovieBanner movie={bannerMovie} />
            <MovieList movies={movies} isLoading={isLoading} />
          </div>
          <div className="space-y-4">
            <GenreList genres={genres} isLoading={isLoadingGenres} />
            <TopRatedMovie
              movies={topRatedMovies}
              isLoading={isLoadingTopRated}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
