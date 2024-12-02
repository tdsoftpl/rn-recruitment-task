import React, {useCallback, useEffect} from 'react';
import {useQuery} from 'react-query';
import {useIsFocused} from '@react-navigation/native';
import {useCharacters} from '../../../../hooks/useCharacters';
import {ActivityIndicator} from 'react-native';
import CharactersList from '../../components/CharactersList/CharactersList';
import {styles} from './CharacterList.styled';
import {colors} from '../../../../styles/global';

export default function CharacterListScreen() {
  const isFocused = useIsFocused();

  const {
    characters,
    currentPage,
    totalPages,
    isLoadingNextPage,
    fetchNextPage,
    filters,
    fetchCharacters,
    setCurrentPage,
    searchedValue,
  } = useCharacters();

  const {isLoading, isError, refetch} = useQuery({
    queryKey: 'characters',
    queryFn: () => fetchCharacters(),
  });

  useEffect(() => {
    // Reset the page and refetch data when screen is focused
    if (isFocused) {
      setCurrentPage(1);
      refetch();
    }
  }, [refetch, setCurrentPage, isFocused, searchedValue, filters]);

  const handleEndReached = useCallback(() => {
    if (totalPages && currentPage < totalPages && !isLoadingNextPage) {
      fetchNextPage();
    }
  }, [totalPages, currentPage, isLoadingNextPage, fetchNextPage]);

  return (
    <CharactersList
      characters={characters}
      isLoading={isLoading}
      isError={isError}
      refetch={refetch}
      ListFooterComponent={
        isLoadingNextPage ? (
          <ActivityIndicator
            color={colors.darkGreen}
            style={styles.loadingFooter}
          />
        ) : undefined
      }
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
    />
  );
}
