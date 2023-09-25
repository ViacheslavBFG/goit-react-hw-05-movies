import { useSearchParams } from 'react-router-dom';
import { searchMoviesAxios } from 'api/fetchData';
import { useState, useEffect } from 'react';
import Searchbar from '../../components/Searchbar/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MovieList from 'components/MovieList/MovieList';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const onFormInput = value => {
    setQuery(value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (!query) {
      toast.warning('Enter your query');
      return;
    }
    searchMoviesAxios(query).then(response => {
      if (response.length === 0) toast.error('Nothing has been found');

      setMovies([...response]);
      const nextParams = query !== '' ? { query } : {};
      setSearchParams(nextParams);
    });
  };

  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const newQuery = searchParams.get('query');
      searchMoviesAxios(newQuery)
        .then(setMovies)
        .catch(error => console.log(error));
    }
  }, [searchParams]);
  return (
    <main>
      <ToastContainer autoClose={2000} />
      <Searchbar onChange={onFormInput} onSubmit={onFormSubmit} query={query} />
      {movies && <MovieList movies={movies} />}
    </main>
  );
};

export default Movie;