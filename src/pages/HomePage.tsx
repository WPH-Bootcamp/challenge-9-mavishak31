import { usePopularMovies, useNowPlayingMovies } from '@/hooks/useMovies';
import MovieCard from '@/components/MovieCard';

export default function HomePage() {
  const { data: popular, isLoading } = usePopularMovies();

  const { data: nowPlaying } = useNowPlayingMovies();

  if (isLoading) {
    return <div className='p-8'>Loading...</div>;
  }

  return (
    <div className='p-6 text-black'>
      <h2 className='font-bold mt-10 mb-10'>Trending Now</h2>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        {popular?.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h2 className='font-bold mt-10 mb-10'>New Release</h2>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        {nowPlaying?.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
