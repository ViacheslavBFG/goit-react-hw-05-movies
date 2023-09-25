import { getMovieCastAxios } from 'api/fetchData';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCastAxios(movieId).then(setCast);
  }, [movieId]);

  return (
    cast && (
      <ul className={css.list}>
        {cast.map(({ id, original_name, character, profile_path }) => (
          <li className={css.item} key={id}>
            <img
              className={css.img}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : 'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png'}
              
              alt={original_name}
            />
            <p className={css.name}>{original_name}</p>
            <p className={css.character}>Character: {character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;