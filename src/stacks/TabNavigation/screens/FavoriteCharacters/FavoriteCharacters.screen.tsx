import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './FavoriteCharacters.styled';
import { useAtom } from 'jotai';
import { favoritesAtom } from '../../../atoms/favoritesAtom';

interface FavoriteCharacter {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
}

const FavoriteCharactersScreen = () => {
  const [favorites] = useAtom(favoritesAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [isRed, setIsRed] = useState(true); 
  const pageSize = 5;

  const currentFavorites = favorites.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPages = Math.ceil(favorites.length / pageSize);

  const renderPagination = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <View style={styles.paginationContainer}>
        {currentPage > 1 && (
          <TouchableOpacity onPress={() => setCurrentPage(1)} style={styles.paginationButton}>
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
          <TouchableOpacity onPress={() => setCurrentPage(totalPages)} style={styles.paginationButton}>
            <Text style={styles.paginationText}>{'>>'}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>
        {item.species} - {item.status}
      </Text>
    </View>
  );

  const toggleButtonColor = () => {
    setIsRed((prev: boolean) => !prev); // working ui  refresh check
  };

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>No favorites yet!</Text>
      ) : (
        <>
          <FlatList
            data={currentFavorites}
            renderItem={renderItem}
            keyExtractor={(item: FavoriteCharacter) => item.id.toString()}
          />
          {renderPagination()}
        </>
      )}
      {/* Color Toggle Button */}
      <TouchableOpacity
        style={{
          backgroundColor: isRed ? 'red' : 'blue',
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={toggleButtonColor}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {isRed ? 'Red Button' : 'Blue Button'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteCharactersScreen;
