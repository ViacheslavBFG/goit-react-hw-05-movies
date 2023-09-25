import { useState, useEffect } from 'react';
import { getTrendingAxios } from 'api/fetchData';
import MovieList from 'components/MovieList/MovieList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingAxios()
      .then(result => setMovies([...result]))
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <h1 className={css.title}>Trending Today</h1>
      {movies && <MovieList movies={movies} />}
    </main>
  );
};

export default Home;