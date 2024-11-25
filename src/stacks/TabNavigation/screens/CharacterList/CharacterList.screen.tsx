import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useInfiniteQuery} from '@tanstack/react-query';
import {getCharacters} from '../../../../Api/CharactersApi';
import {Character, PaginatedResponse} from '../../../../Context/contextTypes';
import {useFavorites} from '../../../../Context/FavouritesContext';
import SearchBar from '../../../../Components/Atoms/SearchBar/SearchBar';
import CharacterInfoCard from '../../../../Components/Molecules/CharacterInfo/CharacterInfo';
import Filter from '../../../../Components/Atoms/Filter/Filter';
import styles from './CharacterList.styled';

type Filters = {
  status: 'Alive' | 'Dead' | 'Unknown' | null;
  species: 'Human' | 'Humanoid' | null;
};

const CharacterListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filters>({
    status: null,
    species: null,
  });

  const {favorites, addToFavorites, removeFromFavorites} = useFavorites();

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery<PaginatedResponse<Character>, Error>({
    queryKey: ['characters', searchQuery, filters],
    queryFn: ({pageParam = 1}) =>
      getCharacters(pageParam, searchQuery, {
        status: filters.status ?? undefined,
        species: filters.species ?? undefined,
      }),
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      lastPage.info.next
        ? parseInt(lastPage.info.next.split('=')[1], 10)
        : undefined,
  });

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    refetch();
  };

  const clearSearch = () => {
    setSearchQuery('');
    refetch();
  };

  const applyFilters = () => {
    refetch();
  };

  const characters = data?.pages.flatMap(page => page.results) ?? [];

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    if (!isFetchingNextPage) {
      return null;
    }
    return <ActivityIndicator style={styles.loader} />;
  };

  const toggleFavorite = (character: Character) => {
    if (favorites.some(fav => fav.id === character.id)) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <Text style={styles.heading}>Characters</Text>
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearch}
          onClear={clearSearch}
          placeholder="Search characters by name"
        />
        <Filter
          filters={filters}
          setFilters={setFilters}
          onApply={applyFilters}
        />
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : isError ? (
          <Text style={styles.errorText}>
            An error occurred. Please try again.
          </Text>
        ) : characters.length === 0 ? (
          <Text style={styles.noResultsText}>No results found.</Text>
        ) : (
          <FlatList
            data={characters}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
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
    </KeyboardAvoidingView>
  );
};

export default CharacterListScreen;
