import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { DetailPage } from './pages/DetailPage';
import { FavoritePage } from './pages/FavoritePage';
import { TrendingPage } from './pages/TrendingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'detail/:movieId',
        element: <DetailPage />,
      },
      {
        path: 'favorites',
        element: <FavoritePage />,
      },
      {
        path: 'trending',
        element: <TrendingPage />,
      },
    ],
  },
]);

export default router;
