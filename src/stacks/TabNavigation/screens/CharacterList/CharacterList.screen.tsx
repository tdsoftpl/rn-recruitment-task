import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {useAtom} from 'jotai';
import {charactersAtom} from '../../../atoms/characterAtom';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import apiClient from '../../../api/axios';

interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
}

const filterOptions = {
  status: ['All', 'Alive', 'Dead', 'Unknown'],
  species: ['All', 'Human', 'Humanoid'],
};

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const [characters, setCharacters] = useAtom(charactersAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedSpecies, setSelectedSpecies] = useState('All');
  const pageSize = 10;

  const fetchAllCharacters = async () => {
    if (characters.length > 0) return;
    setLoading(true);
    try {
      let allCharacters: Character[] = [];
      let nextPage = 'https://rickandmortyapi.com/api/character';
      while (nextPage) {
        const response = await apiClient.get(nextPage);
        allCharacters = [...allCharacters, ...response.data.results];
        nextPage = response.data.info.next;
      }
      setCharacters(allCharacters);
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  const filteredCharacters = characters.filter((character) => {
    const matchesSearch = character.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === 'All' ||
      character.status.toLowerCase() === selectedStatus.toLowerCase();
    const matchesSpecies =
      selectedSpecies === 'All' ||
      character.species.toLowerCase() === selectedSpecies.toLowerCase();

    return matchesSearch && matchesStatus && matchesSpecies;
  });

  const currentCharacters = filteredCharacters.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const getPageNumbers = () => {
    const totalPages = Math.ceil(filteredCharacters.length / pageSize);
    const maxPagesToShow = 5;
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    return Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);
  };

  const renderFilterTags = (
    options: string[],
    selectedOption: string,
    onPress: (option: string) => void
  ) => (
    <View style={styles.filterTagContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.filterTag,
            option === selectedOption && styles.filterTagSelected,
          ]}
          onPress={() => onPress(option)}>
          <Text
            style={[
              styles.filterTagText,
              option === selectedOption && styles.filterTagTextSelected,
            ]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderItem = ({item}: {item: Character}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigate('CharacterDetailsStack', {
          screen: 'CharacterDetailsScreen',
          params: {character: item},
        })
      }>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderPagination = () => {
    const totalPages = Math.ceil(filteredCharacters.length / pageSize);
    const pageNumbers = getPageNumbers();

    return (
      <View style={styles.paginationContainer}>
        {currentPage > 1 && (
          <TouchableOpacity
            onPress={() => setCurrentPage(1)}
            style={styles.paginationButton}>
            <Text style={styles.paginationText}>{'<<'}</Text>
          </TouchableOpacity>
        )}
        {pageNumbers.map((pageNumber) => (
          <TouchableOpacity
            key={pageNumber}
            onPress={() => setCurrentPage(pageNumber)}
            style={[
              styles.paginationButton,
              pageNumber === currentPage && styles.paginationButtonActive,
            ]}>
            <Text
              style={[
                styles.paginationText,
                pageNumber === currentPage && styles.paginationTextActive,
              ]}>
              {pageNumber}
            </Text>
          </TouchableOpacity>
        ))}
        {currentPage < totalPages && (
          <TouchableOpacity
            onPress={() => setCurrentPage(totalPages)}
            style={styles.paginationButton}>
            <Text style={styles.paginationText}>{'>>'}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <Text style={styles.filterTitle}>Status</Text>
          {renderFilterTags(filterOptions.status, selectedStatus, setSelectedStatus)}
          <Text style={styles.filterTitle}>Species</Text>
          {renderFilterTags(filterOptions.species, selectedSpecies, setSelectedSpecies)}
          <FlatList<Character>
            data={currentCharacters}
            renderItem={renderItem}
            keyExtractor={(item: Character) => item.id.toString()}
          />
          {renderPagination()}
        </>
      )}
    </View>
  );
};

export default CharacterListScreen;
