import axios from 'axios';

// TODO: Create axios instance with base configuration
// Hint: Use environment variables for API URL and API key
// Reference: https://axios-http.com/docs/instance

const api = axios.create({
  // TODO: Configure baseURL from environment variable
  // TODO: Add default headers (API key, content-type)
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: Add request interceptor if needed
// Hint: You can add API key to every request here
api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  };

  return config;
});

// TODO: Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('TMDB API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
