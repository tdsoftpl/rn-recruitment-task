import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './CharacterInfo.styled';
import BlankCard from '../../Atoms/BlankCard/BlankCard';
import {useFavorites} from '../../../Context/FavouritesContext';
import {Character} from '../../../Context/contextTypes';
import Button from '../../Atoms/Button/Button';
import {MainStackParamList} from '../../../stacks/Main/Main.routes';

type NavigationProps = NativeStackNavigationProp<
  MainStackParamList,
  'CharacterDetailsStack'
>;

interface CharacterInfoCardProps {
  character: Character;
  onLike: () => void;
}

const CharacterInfoCard = ({character, onLike}: CharacterInfoCardProps) => {
  const navigation = useNavigation<NavigationProps>();
  const {favorites} = useFavorites();
  const isLiked = favorites.some(fav => fav.id === character.id);

  const navigateToDetails = () => {
    navigation.navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: {character},
    });
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
            <Image source={{uri: character.image}} style={styles.image} />
            <Button
              onPress={onLike}
              isLiked={isLiked}
              variant="primary-outlined"
              containerStyle={styles.buttonOnImage}>
              LIKE
            </Button>
          </View>
        </View>
      </BlankCard>
    </TouchableOpacity>
  );
};

export default CharacterInfoCard;
