import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import CharacterCard from '../../../../components/characterCard';
import {
  getCharactersByPage,
  getSearchedCharacters,
  getFilteredCharacters,
  Character,
} from '../../../../services/characterAPI';
import Expand from '../../../../../assets/svg/expand_more.svg';
import Collapse from '../../../../../assets/svg/collapse.svg';
import SearchIcon from '../../../../../assets/svg/searchIcon.svg';
import FiltersModal from '../../../../components/filtersModal';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([]);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const scrollViewRef = useRef<ScrollView>(null);

  const isSearchActive = search.trim() !== '';
  const isFilterActive =
    selectedStatus.length > 0 || selectedSpecies.length > 0;

  const fetchCharacters = async () => {
    let response;
    if (isFilterActive) {
      response = await getFilteredCharacters(
        selectedStatus,
        selectedSpecies,
        currentPage,
      );
    } else if (isSearchActive) {
      response = await getSearchedCharacters(search, currentPage);
    } else {
      response = await getCharactersByPage(currentPage);
    }

    setCharacters(response.characters);
    setTotalPages(response.totalPages);
  };

  useEffect(() => {
    fetchCharacters();
  }, [currentPage, selectedStatus, selectedSpecies]);

  const handleSearch = async () => {
    setCurrentPage(1);
    const response = await getSearchedCharacters(search, 1);
    setCharacters(response.characters);
    setTotalPages(response.totalPages);
  };

  const applyFilters = async () => {
    setCurrentPage(1);
    const response = await getFilteredCharacters(
      selectedStatus,
      selectedSpecies,
      1,
    );
    setCharacters(response.characters);
    setTotalPages(response.totalPages);
    setIsFilterModalVisible(false);
  };

  const handleExpand = () => {
    setIsFilterModalVisible(prev => !prev);
  };

  const handlePageSelect = (page: number) => {
    setCurrentPage(page);
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  };

  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({length: totalPages}, (_, i) => i + 1);
    }

    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages)
      return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      className="w-full p-4"
      contentContainerStyle={{paddingBottom: 120}}>
      <Text className="text-4xl font-medium text-[#162C1B] mb-4">
        Characters
      </Text>

      <View className="flex-row w-full justify-start items-center rounded-3xl border-[#162C1B] border p-2 mb-4">
        <SearchIcon width={20} height={20} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
          placeholder="Search the characters"
          placeholderTextColor="#2B2D4299"
          className="flex-1 px-2 text-[16px]"
        />
      </View>

      <TouchableOpacity
        onPress={handleExpand}
        className={`flex-row justify-center items-center rounded-full w-[113] mb-4 ${
          isFilterModalVisible ? 'bg-[#162C1B]' : 'bg-[#224229]'
        }`}>
        <Text className="text-white font-normal text-lg p-2">FILTER</Text>
        {isFilterModalVisible ? (
          <Collapse width={14} height={14} />
        ) : (
          <Expand width={14} height={14} />
        )}
      </TouchableOpacity>
      <FiltersModal
        visible={isFilterModalVisible}
        onClose={() => setIsFilterModalVisible(false)}
        onSelectStatus={setSelectedStatus}
        onSelectedSpecies={setSelectedSpecies}
        selectedStatus={selectedStatus}
        selectedSpecies={selectedSpecies}
        onConfirm={applyFilters}
      />
      {characters.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigate('CharacterDetailsStack', {
              screen: 'CharacterDetailsScreen',
              params: {
                id: item.id,
                name: item.name,
                status: item.status,
                species: item.species,
                image: item.image,
                origin: item.origin,
                gender: item.gender,
              },
            })
          }>
          <CharacterCard {...item} />
        </TouchableOpacity>
      ))}

      <View className="flex-row justify-center mt-6">
        {currentPage > 1 && (
          <TouchableOpacity
            onPress={() => handlePageSelect(currentPage - 1)}
            className="px-3 py-2 mx-1 bg-[#E0E0E0] rounded-full">
            <Text className="text-sm font-bold text-black">{'<'}</Text>
          </TouchableOpacity>
        )}

        {getVisiblePages().map(page => (
          <TouchableOpacity
            key={page}
            onPress={() => handlePageSelect(page)}
            className={`px-4 py-2 mx-1 rounded-full ${
              currentPage === page ? 'bg-[#162C1B]' : 'bg-[#E0E0E0]'
            }`}>
            <Text
              className={`text-md font-semibold ${
                currentPage === page ? 'text-white' : 'text-black'
              }`}>
              {page}
            </Text>
          </TouchableOpacity>
        ))}

        {currentPage < totalPages && (
          <TouchableOpacity
            onPress={() => handlePageSelect(currentPage + 1)}
            className="px-3 py-2 mx-1 bg-[#E0E0E0] rounded-full">
            <Text className="text-md font-bold text-black">{'>'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default CharacterListScreen;
