import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './CharacterDetails.styled';
import { Character } from './CharacterDetails.types';
import BlankCard from '../../../../Componentss/Atoms/BlankCard/BlankCard';
import { useFavorites } from '../../../../Context/FavouritesContext';

const CharacterDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { character } = route.params as { character: Character };
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isLiked = favorites.some((fav) => fav.id === character.id);

  const handleLikeToggle = () => {
    if (isLiked) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Go back to Characters List</Text>
      </TouchableOpacity>

      <BlankCard>
        <Image source={{ uri: character.image }} style={styles.image} />
        <Text style={styles.characterName}>{character.name}</Text>
        <View style={styles.detailsRow}>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Status</Text>
            <Text style={styles.detailValue}>{character.status}</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Origin</Text>
            <Text style={styles.detailValue}>{character.origin.name}</Text>
          </View>
        </View>

        <View style={styles.detailsRow}>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Species</Text>
            <Text style={styles.detailValue}>{character.species}</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Gender</Text>
            <Text style={styles.detailValue}>{character.gender}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.likeButton} onPress={handleLikeToggle}>
          <Text style={styles.likeButtonText}>
            {isLiked ? '★ REMOVE FROM LIKED' : '★ ADD TO LIKED'}
          </Text>
        </TouchableOpacity>
      </BlankCard>
    </View>
  );
};

export default CharacterDetailsScreen;
