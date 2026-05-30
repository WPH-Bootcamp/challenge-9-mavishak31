import { useMovieStore } from '@/store/movieStore';
import type { IMovie } from '@/types/movie';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '@/lib/utils';

interface Props {
  movie: IMovie;
}

export default function MovieCard({ movie }: Props) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieStore();

  const favorite = isFavorite(movie.id);

  const toggle = () => {
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };
  return (
    <motion.div whileHover={{ scale: 1.04 }} className='relative'>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={getImageUrl(movie.poster_path, 'w342')}
          className='rounded-xl'
          alt='image'
        />

        <div className='mt-2'>
          <h3 className='text-sm font-medium'>{movie.title}</h3>

          <div className='flex items-center gap-1 text-yellow-400 text-xs'>
            <Star size={14} />
            {movie.vote_average.toFixed(1)}
          </div>
        </div>
      </Link>
      <button onClick={toggle} className='absolute top-2 right-2'>
        <Heart size={18} fill={favorite ? 'red' : 'none'} />
      </button>
    </motion.div>
  );
}
