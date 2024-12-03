import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useAtom } from 'jotai';
import { favoritesAtom } from '../../../atoms/favoritesAtom';
import { styles } from './CharacterDetails.styled';
import icon1 from '../../../assets/icons/icon1.png';
import icon2 from '../../../assets/icons/icon3.png';

const CharacterDetailsScreen = () => {
  const route = useRoute();
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const character = route.params?.character;

  if (!character) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Character not found!</Text>
      </View>
    );
  }

  const isFavorite = favorites.some((fav) => fav.id === character.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== character.id));
    } else {
      setFavorites((prev) => [...prev, character]);
    }
  };

  return (
    <ScrollView  contentContainerStyle={styles.container}>
      <View style={styles.cardWrapper}>
        {/* Image Section */}
        <View style={styles.imageWrapper}>
          <Image source={{ uri: character.image }} style={styles.characterImage} />
        </View>

        {/* Details Section */}
        <View style={styles.detailsContainer}>
          <Text style={styles.labelName}>NAME</Text>
          <Text style={styles.nameText}>{character.name}</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>STATUS</Text>
              <Text style={styles.bodyText}>{character.status}</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>ORIGIN</Text>
              <Text style={styles.bodyText}>{character.origin.name}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>SPECIES</Text>
              <Text style={styles.bodyText}>{character.species}</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>GENDER</Text>
              <Text style={styles.bodyText}>{character.gender}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.favoriteButton,
              isFavorite ? styles.buttonActive : styles.buttonInactive,
            ]}
            onPress={toggleFavorite}
          >
            <Image source={isFavorite ? icon1 : icon2} style={styles.favoriteIcon} />
            <Text style={styles.favoriteText}>
              {isFavorite ? 'REMOVE FROM LIKED' : 'ADD TO LIKED'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterDetailsScreen;
