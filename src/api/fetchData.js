import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFmMDdhZGQ3MmE5NDgyOGE5MTBhNGE2MGU1NTkzOCIsInN1YiI6IjY0NmY3YmFmMDcyMTY2MDBhNzliZTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpPxpgdkPRwFPgBZQbT8Vxk-iHt6wJxJ2MPjUOG8m3M',
  },
  params: {
    'language': 'en-US',
  },
});


const performRequest = async (method, url, params = {}) => {
  try {
    const response = await axiosInstance.request({
      method,
      url,
      params,
    });
    return response.data;
  } catch (error) {
   
    console.error(error);
    throw error;
  }
};

export const getTrendingAxios = async () => {
  const url = 'trending/all/day';
  return performRequest('GET', url);
};

export const searchMoviesAxios = async query => {
  const url = 'search/movie';
  const params = {
    query,
    include_adult: 'false',
    page: '1',
  };
  return performRequest('GET', url, params);
};

export const getMovieDetailsAxios = async id => {
  const url = `movie/${id}`;
  return performRequest('GET', url);
};

export const getMovieCastAxios = async id => {
  const url = `movie/${id}/credits`;
  return performRequest('GET', url);
};

export const getMovieReviewsAxios = async id => {
  const url = `movie/${id}/reviews`;
  const params = {
    page: '1',
  };
  return performRequest('GET', url, params);
};
