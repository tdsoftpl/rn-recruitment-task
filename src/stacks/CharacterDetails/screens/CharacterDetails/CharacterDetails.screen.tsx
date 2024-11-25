import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './CharacterDetails.styled';
import {Character} from './CharacterDetails.types';
import BlankCard from '../../../../Components/Atoms/BlankCard/BlankCard';
import {useFavorites} from '../../../../Context/FavouritesContext';
import Button from '../../../../Components/Atoms/Button/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../../../theme/theme';

const CharacterDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {character} = route.params as {character: Character};
  const {favorites, addToFavorites, removeFromFavorites} = useFavorites();
  const isLiked = favorites.some(fav => fav.id === character.id);

  const handleLikeToggle = () => {
    if (isLiked) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color={styles.iconColor.color} />
        <Text style={styles.backText}>Go back to Characters List</Text>
      </TouchableOpacity>

      <BlankCard style={{backgroundColor: theme.colors.white}}>
        <Image source={{uri: character.image}} style={styles.image} />
        <View style={styles.nameSection}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.characterName}>{character.name}</Text>
        </View>
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

        <Button
          onPress={handleLikeToggle}
          isLiked={isLiked}
          variant="primary-filled">
          {isLiked ? 'REMOVE FROM LIKED' : 'ADD TO LIKED'}
        </Button>
      </BlankCard>
    </View>
  );
};

export default CharacterDetailsScreen;
