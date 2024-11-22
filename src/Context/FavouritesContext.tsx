import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Character } from '../stacks/CharacterDetails/screens/CharacterDetails/CharacterDetails.types';

interface FavoritesContextType {
  favorites: Character[];
  addToFavorites: (character: Character) => void;
  removeFromFavorites: (characterId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addToFavorites = (character: Character) => {
    setFavorites((prevFavorites) => [...prevFavorites, character]);
  };

  const removeFromFavorites = (characterId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((char) => char.id !== characterId)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
