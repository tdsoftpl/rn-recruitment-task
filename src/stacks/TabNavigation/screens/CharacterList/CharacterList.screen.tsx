import React, { useState } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCharacters } from '../../../../Api/CharactersApi';
import { Character, PaginatedResponse } from '../../../../Context/contextTypes';
import { useFavorites } from '../../../../Context/FavouritesContext';
import SearchBar from '../../../../Componentss/Atoms/SearchBar/SearchBar';
import CharacterInfoCard from '../../../../Componentss/Molecules/CharacterInfo/CharacterInfo';
import styles from './CharacterList.styled';

const CharacterListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery<PaginatedResponse<Character>>({
    queryKey: ['characters', searchQuery],
    queryFn: ({ pageParam = 1 }: { pageParam?: number }) =>
      getCharacters(pageParam, searchQuery),
    getNextPageParam: (lastPage) =>
      lastPage.info.next ? parseInt(lastPage.info.next.split('=')[1], 10) : undefined,
  });

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    refetch();
  };

  const clearSearch = () => {
    setSearchQuery('');
    refetch();
  };

  const characters = data?.pages.flatMap((page) => page?.results) ?? [];

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    if (!isFetchingNextPage) {return null;}
    return <ActivityIndicator style={styles.loader} />;
  };

  const toggleFavorite = (character: Character) => {
    if (favorites.some((fav) => fav.id === character.id)) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Characters</Text>
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
        onClear={clearSearch}
        placeholder="Search characters by name"
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#224229" />
      ) : isError ? (
        <Text>Brak Wyników</Text>
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CharacterInfoCard
              character={item}
              onLike={() => toggleFavorite(item)}
            />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
};

export default CharacterListScreen;
