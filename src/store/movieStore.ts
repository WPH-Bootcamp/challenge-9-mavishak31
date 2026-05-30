import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { IMovie } from '@/types/movie';

// TODO: Define your store state interface
interface IMovieStore {
  // TODO: Add state properties
  // Examples: favorites, watchlist, selectedMovie, etc.
  favorites: IMovie[];

  // TODO: Add action methods
  // Examples: addToFavorites, removeFromFavorites, etc.
  addToFavorites: (movie: IMovie) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

// TODO: Create Zustand store
// Reference: https://zustand.docs.pmnd.rs/getting-started/introduction

export const useMovieStore = create<IMovieStore>()(
  // TODO: Initialize state and implement actions
  persist(
    (set, get) => ({
      favorites: [],

      addToFavorites: (movie) =>
        set((state) => ({
          favorites: [movie, ...state.favorites],
        })),

      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((m) => m.id !== id),
        })),

      isFavorite: (id) => get().favorites.some((m) => m.id === id),
    }),
    {
      name: 'movie-favorites',
    }
  )
);
