import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

const Searchbar = ({ onChange, onSubmit, query }) => {
  return (
    <form onSubmit={onSubmit}>
       <h1 className={css.title}>Search Movies</h1>
      <input
        className={css.input}
        onChange={e => onChange(e.target.value)}
        type="text"
        name="query"
        value={query}
      />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
};