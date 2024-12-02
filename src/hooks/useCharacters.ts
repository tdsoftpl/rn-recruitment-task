import {useContext} from 'react';
import {CharactersContext} from '../context/CharactersContext';

export function useCharacters() {
  const context = useContext(CharactersContext);

  if (!context) {
    throw new Error(
      'useCharactersContext must be used within a CharactersContextProvider.',
    );
  }

  return context;
}
