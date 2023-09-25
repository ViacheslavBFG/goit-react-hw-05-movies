import axios from 'axios';

export const getTrendingAxios = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/all/day',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFmMDdhZGQ3MmE5NDgyOGE5MTBhNGE2MGU1NTkzOCIsInN1YiI6IjY0NmY3YmYxMDcyMTY2MDBhNzliZTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpPxpgdkPRwFPgBZQbT8Vxk-iHt6wJxJ2MPjUOG8m3M',
    },
  };

  const response = await axios.request(options);

  return response.data.results;
};

export const searchMoviesAxios = async query => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFmMDdhZGQ3MmE5NDgyOGE5MTBhNGE2MGU1NTkzOCIsInN1YiI6IjY0NmY3YmYxMDcyMTY2MDBhNzliZTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpPxpgdkPRwFPgBZQbT8Vxk-iHt6wJxJ2MPjUOG8m3M',
    },
  };

  const response = await axios.request(options);

  return response.data.results;
};

export const getMovieDetailsAxios = async id => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFmMDdhZGQ3MmE5NDgyOGE5MTBhNGE2MGU1NTkzOCIsInN1YiI6IjY0NmY3YmYxMDcyMTY2MDBhNzliZTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpPxpgdkPRwFPgBZQbT8Vxk-iHt6wJxJ2MPjUOG8m3M',
    },
  };

  const response = await axios.request(options);

  return response.data;
};

export const getMovieCastAxios = async id => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFmMDdhZGQ3MmE5NDgyOGE5MTBhNGE2MGU1NTkzOCIsInN1YiI6IjY0NmY3YmYxMDcyMTY2MDBhNzliZTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpPxpgdkPRwFPgBZQbT8Vxk-iHt6wJxJ2MPjUOG8m3M',
    },
  };

  const response = await axios.request(options);

  return response.data.cast;
};

export const getMovieReviewsAxios = async id => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFmMDdhZGQ3MmE5NDgyOGE5MTBhNGE2MGU1NTkzOCIsInN1YiI6IjY0NmY3YmYxMDcyMTY2MDBhNzliZTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpPxpgdkPRwFPgBZQbT8Vxk-iHt6wJxJ2MPjUOG8m3M',
    },
  };

  const response = await axios.request(options);

  return response.data.results;
};