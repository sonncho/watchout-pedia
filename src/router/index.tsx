import { createBrowserRouter } from "react-router-dom"

import ErrorPage from "../pages/ErrorPage"
import MainPage from "../pages/MainPage"
import MovieDetail from "../pages/MovieDetail"
import TvPage from "../pages/TvPage"
import TvDetail from "../pages/TvDetail"
import Layouts from "../components/Layouts/Index"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path:'tv',
        element: <TvPage />,
      },
      {
        path: 'tv/:id',
        element: <TvDetail />
      },
      {
        path: 'movie/:id',
        element: <MovieDetail />
      }
    ]
  },
]);

export default router;