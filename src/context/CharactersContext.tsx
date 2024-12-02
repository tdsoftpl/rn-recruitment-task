import React, {createContext, useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {rickAndMortyApi} from '../api/rickAndMortyApi';
import type {Character} from '../types/CharactersInfo';
import type {Filters} from '../types/Filters';

// Delete the following line:
const testLikedCharactersIdsData = [5, 8, 19, 32, 153, 183];

export type CharactersContextValues = {
  characters?: Character[];
  likedCharacters?: Character[];
  likedCharactersIds: number[];
  currentPage: number;
  setCurrentPage: (value: number) => void;
  totalPages?: number;
  isLoadingNextPage: boolean;
  searchedValue: string;
  setSearchedValue: (value: string) => void;
  filters: Filters | undefined;
  setFilters: (filters: Filters | undefined) => void;
  fetchCharacters: () => void;
  fetchLikedCharacters: () => void;
  fetchNextPage: () => void;
  toggleLikedStatus: (id: number) => void;
};

export const CharactersContext = createContext<CharactersContextValues | null>(
  null,
);

export default function CharactersContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Characters data
  const [characters, setCharacters] = useState<Character[] | undefined>();
  const [likedCharacters, setLikedCharacters] = useState<
    Character[] | undefined
  >();
  // Liked characters ids
  const [likedCharactersIds, setLikedCharactersIds] = useState<number[]>(
    testLikedCharactersIdsData || [],
  );
  // Pages
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  // Filters
  const [searchedValue, setSearchedValue] = useState('');
  const [filters, setFilters] = useState<Filters>();

  const fetchCharacters = useCallback(async () => {
    try {
      const data = await rickAndMortyApi.fetchCharacters(
        searchedValue,
        filters,
      );

      if (data && data.info && data.results) {
        setTotalPages(data.info.pages);
        setCharacters(data.results);
        return data;
      } else {
        console.error('Received invalid data format');
        return null;
      }
    } catch (error) {
      // Check if the error is related to no results
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        // Clear the characters list and total pages
        setCharacters([]);
        setTotalPages(undefined);
        return null;
      }

      console.error('Error fetching characters.', error);
      return null;
    }
  }, [searchedValue, filters]);

  const fetchNextPage = useCallback(async () => {
    if (
      isLoadingNextPage ||
      !characters ||
      !totalPages ||
      currentPage >= totalPages
    ) {
      return;
    }

    try {
      setIsLoadingNextPage(true);

      const newData = await rickAndMortyApi.fetchNextPage(
        currentPage,
        searchedValue,
        filters,
      );

      if (newData && newData.results) {
        setCurrentPage(currentPage + 1);
        setCharacters([...characters, ...newData.results]);
      }
    } catch (error) {
      console.error('Error fetching next page.', error);
    } finally {
      setIsLoadingNextPage(false);
    }
  }, [
    isLoadingNextPage,
    characters,
    totalPages,
    currentPage,
    searchedValue,
    filters,
  ]);

  const fetchLikedCharacters = useCallback(async () => {
    if (likedCharactersIds.length > 0) {
      try {
        const likedData = await rickAndMortyApi.fetchLikedCharacters(
          likedCharactersIds,
        );

        if (likedData) {
          setLikedCharacters(likedData);
          return likedData;
        }
      } catch (error) {
        console.error('Error fetching liked characters.', error);
      }
    }
  }, [likedCharactersIds]);

  const toggleLikedStatus = useCallback(
    (id: number) => {
      setLikedCharactersIds(prevIds => {
        const newIds = prevIds.includes(id)
          ? prevIds.filter(item => item !== id)
          : [...prevIds, id];

        setLikedCharacters(prev => {
          if (newIds.includes(id)) {
            const characterToAdd = characters?.find(
              character => character.id === id,
            );
            if (characterToAdd) {
              const updatedLikedCharacters = [...(prev || []), characterToAdd];
              return updatedLikedCharacters.sort((a, b) => a.id - b.id);
            }
          } else {
            return prev?.filter(character => character.id !== id);
          }
          return prev;
        });

        return newIds;
      });
    },
    [characters],
  );

  // Load liked characters on initialization
  useEffect(() => {
    async function loadLikedCharacters() {
      try {
        const storedIds = await AsyncStorage.getItem('likedCharactersIds');
        if (storedIds) {
          const parsedIds = JSON.parse(storedIds);
          Array.isArray(parsedIds) && setLikedCharactersIds(parsedIds);
        }
      } catch (error) {
        console.error('Error loading liked characters', error);
      }
    }

    loadLikedCharacters();
  }, []);

  // Update AsyncStorage when liked characters change
  useEffect(() => {
    async function saveLikedCharacters() {
      try {
        await AsyncStorage.setItem(
          'likedCharactersIds',
          JSON.stringify(likedCharactersIds),
        );
      } catch (error) {
        console.error('Error saving liked characters', error);
      }
    }

    // Save only if there are liked characters
    if (likedCharactersIds.length > 0) {
      saveLikedCharacters();
    }
  }, [likedCharactersIds]);

  const values: CharactersContextValues = {
    characters,
    likedCharacters,
    likedCharactersIds,
    currentPage,
    setCurrentPage,
    totalPages,
    isLoadingNextPage,
    searchedValue,
    setSearchedValue,
    filters,
    setFilters,
    fetchCharacters,
    fetchLikedCharacters,
    fetchNextPage,
    toggleLikedStatus,
  };

  return (
    <CharactersContext.Provider value={values}>
      {children}
    </CharactersContext.Provider>
  );
}
