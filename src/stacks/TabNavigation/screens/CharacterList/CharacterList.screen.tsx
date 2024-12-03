import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Animated,
} from 'react-native';
import { styles } from './CharacterList.styled';
import { useNavigation } from '@react-navigation/native';
import { useAtom } from 'jotai';
import { charactersAtom } from '../../../atoms/characterAtom';
import { favoritesAtom } from '../../../atoms/favoritesAtom';
import { filtersAtom } from '../../../atoms/filtersAtom';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import apiClient from '../../../api/axios';

import icon1 from '../../../assets/icons/icon1.png';
import icon2 from '../../../assets/icons/icon2.png';
import searchIcon from '../../../assets/icons/searchIcon.png';
import iconArrowUp from '../../../assets/icons/iconArrowUp2.png';
import iconCheck from '../../../assets/icons/iconCheck1.png';


const AnimatedImage = Animated.createAnimatedComponent(Image) as typeof Image;

interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
  gender: string;
  origin: { name: string; url: string };
}


const statusOptions = [
  { label: 'Alive', value: 'Alive' },
  { label: 'Dead', value: 'Dead' },
  { label: 'Unknown', value: 'unknown' },
];

const speciesOptions = [
  { label: 'Human', value: 'Human' },
  { label: 'Humanoid', value: 'Humanoid' },
  { label: 'Alien', value: 'Alien' },
  { label: 'Robot', value: 'Robot' },
  { label: 'Animal', value: 'Animal' },
  { label: 'Other', value: 'Other' }, 
];

const genderOptions = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
  { label: 'Genderless', value: 'Genderless' },
  { label: 'Unknown', value: 'unknown' },
];

const knownSpecies = ['Human', 'Humanoid', 'Alien', 'Robot', 'Animal'];

const CharacterListScreen = () => {
  const { navigate } = useNavigation<MainStackNavigationProp>();
  const [characters, setCharacters] = useAtom(charactersAtom);
  const [favorites] = useAtom(favoritesAtom);
  const [filters, setFilters] = useAtom(filtersAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const pageSize = 10;

  const [showFilters, setShowFilters] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string[]>(filters.status ?? []);
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>(filters.species ?? []);
  const [selectedGender, setSelectedGender] = useState<string[]>(filters.gender ?? []);

  const rotateAnimation = useState(new Animated.Value(0))[0];

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
      filters.status.length === 0 || filters.status.includes(character.status);

    let matchesSpecies = true;
    if (filters.species.length > 0) {
      if (filters.species.includes('Other')) {
        if (filters.species.length === 1) {
          matchesSpecies = !knownSpecies.includes(character.species);
        } else {
          matchesSpecies =
            filters.species
              .filter((species) => species !== 'Other')
              .includes(character.species) ||
            !knownSpecies.includes(character.species);
        }
      } else {
        matchesSpecies = filters.species.includes(character.species);
      }
    }

    const matchesGender =
      filters.gender.length === 0 || filters.gender.includes(character.gender);

    return matchesSearch && matchesStatus && matchesSpecies && matchesGender;
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

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const toggleSelection = (
    list: string[],
    setList: Function,
    value: string
  ) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const renderItem = ({ item }: { item: Character }) => {
    const isFavorite = favorites.some((fav) => fav.id === item.id);

    return (
      <View style={styles.cardWrapper}>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigate('CharacterDetailsStack', {
              screen: 'CharacterDetailsScreen',
              params: { character: item },
            })
          }
        >
          <View style={styles.cardContent}>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>Name</Text>
              <Text style={styles.bodyText}>{item.name}</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>Status</Text>
              <Text style={styles.bodyText}>{item.status}</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>Species</Text>
              <Text style={styles.bodyText}>{item.species}</Text>
            </View>
            {/* Removed gender display */}
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.cardImage}
              resizeMode="contain"
            />
            <View style={styles.likeButton}>
              <Image source={isFavorite ? icon1 : icon2} style={styles.likeIcon} />
              <Text style={styles.likeText}>LIKE</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(filteredCharacters.length / pageSize);
    const pageNumbers = getPageNumbers();

    return (
      <View style={styles.paginationContainer}>
        {currentPage > 1 && (
          <TouchableOpacity
            onPress={() => setCurrentPage(1)}
            style={styles.paginationButton}
          >
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
            ]}
          >
            <Text
              style={[
                styles.paginationText,
                pageNumber === currentPage && styles.paginationTextActive,
              ]}
            >
              {pageNumber}
            </Text>
          </TouchableOpacity>
        ))}
        {currentPage < totalPages && (
          <TouchableOpacity
            onPress={() => setCurrentPage(totalPages)}
            style={styles.paginationButton}
          >
            <Text style={styles.paginationText}>{'>>'}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const handleApplyFilters = () => {
    setFilters({
      status: selectedStatus,
      species: selectedSpecies,
      gender: selectedGender,
    });
    setShowFilters(false);
    Animated.timing(rotateAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleResetFilters = () => {
    setSelectedStatus([]);
    setSelectedSpecies([]);
    setSelectedGender([]);
    setFilters({ status: [], species: [], gender: [] });
    setShowFilters(false);
    Animated.timing(rotateAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const toggleFilterSection = () => {
    const toValue = showFilters ? 0 : 1;
    setShowFilters(!showFilters);
    Animated.timing(rotateAnimation, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {/* Search Bar */}
          <View style={styles.searchInputWrapper}>
            <Image source={searchIcon} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search by name"
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
          </View>

          {/* Filter Button */}
          <TouchableOpacity
            style={[
              styles.filterButton,
              showFilters ? styles.filterButtonActive : styles.filterButtonInactive,
            ]}
            onPress={toggleFilterSection}
          >
            <Text style={styles.filterButtonText}>Filter</Text>
            <AnimatedImage
              source={iconArrowUp}
              style={[
                styles.arrowIcon,
                { transform: [{ rotate: rotateInterpolate }] },
              ]}
            />
          </TouchableOpacity>

          {/* Filter Section */}
          {showFilters && (
            <View style={styles.filterSection}>
              <Text style={styles.modalLabel}>STATUS</Text>
              {statusOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.checkboxContainer}
                  onPress={() =>
                    toggleSelection(selectedStatus, setSelectedStatus, option.value)
                  }
                >
                  <View
                    style={[
                      styles.checkbox,
                      selectedStatus.includes(option.value) && styles.checkboxChecked,
                    ]}
                  >
                    {selectedStatus.includes(option.value) && (
                      <Image source={iconCheck} style={styles.checkboxIcon} />
                    )}
                  </View>
                  <Text style={styles.checkboxLabel}>{option.label}</Text>
                </TouchableOpacity>
              ))}

              <Text style={styles.modalLabel}>SPECIES</Text>
              {speciesOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.checkboxContainer}
                  onPress={() =>
                    toggleSelection(selectedSpecies, setSelectedSpecies, option.value)
                  }
                >
                  <View
                    style={[
                      styles.checkbox,
                      selectedSpecies.includes(option.value) && styles.checkboxChecked,
                    ]}
                  >
                    {selectedSpecies.includes(option.value) && (
                      <Image source={iconCheck} style={styles.checkboxIcon} />
                    )}
                  </View>
                  <Text style={styles.checkboxLabel}>{option.label}</Text>
                </TouchableOpacity>
              ))}

              <Text style={styles.modalLabel}>GENDER</Text>
              {genderOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.checkboxContainer}
                  onPress={() =>
                    toggleSelection(selectedGender, setSelectedGender, option.value)
                  }
                >
                  <View
                    style={[
                      styles.checkbox,
                      selectedGender.includes(option.value) && styles.checkboxChecked,
                    ]}
                  >
                    {selectedGender.includes(option.value) && (
                      <Image source={iconCheck} style={styles.checkboxIcon} />
                    )}
                  </View>
                  <Text style={styles.checkboxLabel}>{option.label}</Text>
                </TouchableOpacity>
              ))}

              {/* Buttons */}
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.resetButton]}
                  onPress={handleResetFilters}
                >
                  <Text style={styles.modalButtonText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.applyButton]}
                  onPress={handleApplyFilters}
                >
                  <Text style={styles.modalButtonText2}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Character List */}
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
