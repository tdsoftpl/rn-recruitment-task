import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useFavorites} from '../../../../Context/FavouritesContext';
import CharacterInfoCard from '../../../../Components/Molecules/CharacterInfo/CharacterInfo';
import {Character} from '../../../../Context/contextTypes';
import SearchBar from '../../../../Components/Atoms/SearchBar/SearchBar';
import styles from './FavoriteCharacters.styled';

const FavoriteCharactersScreen = () => {
  const {favorites, removeFromFavorites} = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFavorites = favorites.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const toggleFavorite = (character: Character) => {
    removeFromFavorites(character.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorite Characters</Text>

      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClear={() => setSearchQuery('')}
        placeholder="Search favorite characters"
      />

      {filteredFavorites.length === 0 ? (
        <Text style={styles.emptyText}>
          {searchQuery
            ? 'No matching characters found!'
            : 'No liked characters yet!'}
        </Text>
      ) : (
        <FlatList
          data={filteredFavorites}
          renderItem={({item}) => (
            <CharacterInfoCard
              character={item}
              onLike={() => toggleFavorite(item)}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default FavoriteCharactersScreen;
