import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants';
import { movieService } from '@/services/movieService';

// TODO: Create custom hooks using React Query
// Reference: https://tanstack.com/query/latest/docs/framework/react/overview

// Example: Hook to fetch popular movies
export const usePopularMovies = (page = 1) => {
  // TODO: Implement useQuery hook
  // Hint: Use movieService.getPopularMovies as queryFn
  return useQuery({
    queryKey: QUERY_KEYS.movies.popular(page),
    queryFn: () =>
      // TODO: Call your movie service function
      movieService.getPopularMovies(page),
  });
};

// TODO: Add more hooks for different endpoints
// Examples: useMovieDetails, useSearchMovies, useNowPlayingMovies

export const useNowPlayingMovies = (page = 1) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.nowPlaying(page),
    queryFn: () => movieService.getNowPlayingMovies(page),
  });
};

export const useMovieDetails = (id: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.details(id),
    queryFn: () => movieService.getMovieDetails(id),
    enabled: !!id,
  });
};

export const useSearchMovies = (query: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.search(query, 1),
    queryFn: () => movieService.searchMovies(query),
    enabled: !!query,
  });
};
