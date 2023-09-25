import { getMovieReviewsAxios } from 'api/fetchData';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsAxios(movieId).then(setReviews);
  }, [movieId]);
  if (!reviews) return null;

  return (
    <>
      {reviews.length !== 0 ? (
        <ul className={css.reviewList}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviewItem}>
              <h2  className={css.authorName}>{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'Sorry, there are no reviews for this movie'
      )}
    </>
  );
};

export default Reviews;