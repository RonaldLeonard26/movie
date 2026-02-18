import { Navbar } from './components/Navbar';
import { MovieBanner } from './components/movie/MovieBanner';
import { MovieList } from './components/movie/MovieList';
import { TopRatedMovie } from './components/movie/TopRatedMovie';
import { useFetchPopularMovie } from './hooks/useFetchPopularMovie';
import { useFetchTopRatedMovie } from './hooks/useFetchTopRatedMovie';

function App() {
  const { movies, isLoading, bannerMovie } = useFetchPopularMovie();

  const { topRatedMovies, isLoadingTopRated } = useFetchTopRatedMovie();
  console.log(topRatedMovies);

  return (
    <>
      <div className="max-w-screen">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] m-4 ">
          <div>
            <MovieBanner movie={bannerMovie} />
            <MovieList movies={movies} isLoading={isLoading} />
          </div>
          <div>
            <TopRatedMovie
              movies={topRatedMovies}
              isLoading={isLoadingTopRated}
            />

            <h2>Genre</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
