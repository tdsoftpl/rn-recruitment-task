import React from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { useFavorites } from '../../../../Context/FavouritesContext';
import CharacterInfoCard from '../../../../Componentss/Molecules/CharacterInfo/CharacterInfo';
import { Character } from '../../../../Context/contextTypes';
import styles from './FavoriteCharacters.styled';

const FavoriteCharactersScreen = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  const toggleFavorite = (character: Character) => {
    removeFromFavorites(character.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorite Characters</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>No liked characters yet!</Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <CharacterInfoCard
              character={item}
              onLike={() => toggleFavorite(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={
            favorites.length > 0 ? (
              <ActivityIndicator size="large" color="#224229" style={styles.loader} />
            ) : null
          }
        />
      )}
    </View>
  );
};

export default FavoriteCharactersScreen;
