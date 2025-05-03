import React, {createContext, useContext, useEffect, useState} from 'react';
import {Character} from '../services/characterAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, View} from 'react-native';

const FAVORITES_KEY = 'favorites';

type FavoritesContextType = {
  favorites: Character[];
  toggleFavorite: (character: Character) => void;
  isFavorite: (id: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({children}: {children: React.ReactNode}) => {
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const stored = await AsyncStorage.getItem(FAVORITES_KEY);
        if (stored) {
          setFavorites(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Failed to load favorites from storage:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadFavorites();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  }, [favorites, isLoading]);

  const toggleFavorite = (character: Character) => {
    setFavorites(prev =>
      prev.some(fav => fav.id === character.id)
        ? prev.filter(fav => fav.id !== character.id)
        : [...prev, character],
    );
  };

  const isFavorite = (id: number) => favorites.some(fav => fav.id === id);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#162C1B" />
      </View>
    );
  }

  return (
    <FavoritesContext.Provider value={{favorites, toggleFavorite, isFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error('useFavorites must be used within FavoritesProvider');
  return context;
};
