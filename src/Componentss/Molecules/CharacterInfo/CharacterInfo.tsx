import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './CharacterInfo.styled';
import BlankCard from '../../Atoms/BlankCard/BlankCard';
import { useNavigation } from '@react-navigation/native';
import { useFavorites } from '../../../Context/FavouritesContext';
import { Character } from '../../../Context/contextTypes';
interface CharacterInfoCardProps {
  character: Character;
  onLike: () => void;
}

const CharacterInfoCard = ({ character, onLike }: CharacterInfoCardProps) => {
  const navigation = useNavigation();
  const { favorites } = useFavorites();
  const isLiked = favorites.some((fav) => fav.id === character.id);

  const navigateToDetails = () => {
    navigation.navigate('CharacterDetailsStack' as never, {
      screen: 'CharacterDetailsScreen',
      params: { character },
    } as never);
  };
  return (
    <TouchableOpacity onPress={navigateToDetails}>
      <BlankCard>
        <View style={styles.cardContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{character.name}</Text>

            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>{character.status}</Text>

            <Text style={styles.label}>Species</Text>
            <Text style={styles.value}>{character.species}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <TouchableOpacity
              onPress={onLike}
              style={[styles.likeButton, isLiked ? styles.liked : styles.notLiked]}
            >
              <Text style={styles.likeText}>
                {isLiked ? '★ Liked' : '☆ Like'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlankCard>
    </TouchableOpacity>
  );
};

export default CharacterInfoCard;
