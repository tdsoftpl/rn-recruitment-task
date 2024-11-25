import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CharacterContextProps } from './contextTypes';

const CharacterContext = createContext<CharacterContextProps | undefined>(undefined);

export function CharacterProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState(1);

  return (
    <CharacterContext.Provider value={{ page, setPage }}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacterContext() {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacterContext must be used within a CharacterProvider');
  }
  return context;
}
