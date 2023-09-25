import { Route, Routes, Navigate, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from '../Loader/Loader';
import css from './App.module.css';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
export const App = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink
          className={({ isActive }) =>
            isActive ? [css.link, css.active].join(' ') : css.link
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? [css.link, css.active].join(' ') : css.link
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};