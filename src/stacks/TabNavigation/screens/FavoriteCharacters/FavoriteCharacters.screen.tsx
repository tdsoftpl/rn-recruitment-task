import React from 'react';
import {useCharacters} from '../../../../hooks/useCharacters';
import {useQuery} from 'react-query';
import CharactersList from '../../components/CharactersList/CharactersList';

export default function FavoriteCharactersScreen() {
  const {
    likedCharacters: characters,
    fetchLikedCharacters,
    searchedValue,
    filters,
  } = useCharacters();

  const {isLoading, isError, refetch} = useQuery({
    queryKey: 'likedCharacters',
    queryFn: () => fetchLikedCharacters(),
  });

  // Filter characters based on `searchedValue` to avoid refetch data in favourite list, because it's already fetched and stored in context
  const filteredCharacters = characters?.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchedValue);

    const matchesStatus =
      !filters?.status || character.status.toLowerCase() === filters.status;

    const matchesSpecies =
      !filters?.species || character.species.toLowerCase() === filters.species;

    return matchesSearch && matchesStatus && matchesSpecies;
  });

  return (
    <CharactersList
      characters={filteredCharacters}
      isLoading={isLoading}
      isError={isError}
      refetch={refetch}
    />
  );
}
