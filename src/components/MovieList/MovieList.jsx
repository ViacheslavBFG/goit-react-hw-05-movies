import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, name, title }) => {
        return (
          <Link
            className={css.item}
            to={`/movies/${id}`}
            key={id}
            state={{ from: location }}
          >
            {title}
            {name}
          </Link>
        );
      })}
    </ul>
  );
};

export default MovieList;

MovieList.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};