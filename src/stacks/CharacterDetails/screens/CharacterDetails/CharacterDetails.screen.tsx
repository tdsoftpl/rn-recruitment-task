import React, { useCallback, useState } from 'react';
import { Text, View, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useAtom } from 'jotai';
import { favoritesAtom } from '../../../atoms/favoritesAtom';
import { useFocusEffect } from '@react-navigation/native';
import { CharacterDetailsStackParamList } from '../CharacterDetails/CharacterDetails.routes';


type CharacterDetailsStackParamList = {
  CharacterDetailsScreen: {
    character: {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: { name: string; url: string };
      location: { name: string; url: string };
      image: string;
      episode: string[];
      created: string;
      };
    };
  };

type CharacterDetailsRouteProp = RouteProp<
  CharacterDetailsStackParamList, 
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = () => {

  const [isRed, setIsRed] = useState(true); 
  const toggleButtonColor = () => {
    setIsRed((prev: boolean) => !prev); 
  };
  const route = useRoute<CharacterDetailsRouteProp>();
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const [refreshKey, setRefreshKey] = useState(0); 

  const character = route.params?.character;

  if (!character) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red', fontSize: 18 }}>Character not found!</Text>
      </View>
    );
  }

  const isFavorite = favorites.some((fav) => fav.id === character.id);

  useFocusEffect(
    useCallback(() => {
      console.log('Current Favorites:', favorites);
      console.log(`Character ${character.name} - Is Favorite: ${isFavorite}`);
    }, [favorites, isFavorite])
  );

  const handleAddToFavorites = () => {
    setFavorites((prev) => [...prev, character]);
    setRefreshKey((prevKey: number) => prevKey + 1); 
    Alert.alert('Added to Favorites', `${character.name} has been added to your favorites.`);
  };

  const handleRemoveFromFavorites = () => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== character.id));
    setRefreshKey((prevKey: number) => prevKey + 1); 
    Alert.alert('Removed from Favorites', `${character.name} has been removed from your favorites.`);
  };

  console.log(`Rendering: isFavorite = ${isFavorite}, refreshKey = ${refreshKey}`);



  return (
    <ScrollView contentContainerStyle={{ padding: 20 }} key={refreshKey}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: character.image }}
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>
          {character.name}
        </Text>
        <Text style={{ fontWeight: 'bold' }}>Species:</Text>
        <Text style={{ marginBottom: 10 }}>{character.species}</Text>
        <Text style={{ fontWeight: 'bold' }}>Status:</Text>
        <Text style={{ marginBottom: 10 }}>{character.status}</Text>
        <Text style={{ fontWeight: 'bold' }}>Gender:</Text>
        <Text style={{ marginBottom: 10 }}>{character.gender}</Text>
        <Text style={{ fontWeight: 'bold' }}>Origin:</Text>
        <Text style={{ marginBottom: 10 }}>{character.origin.name}</Text>
        <Text style={{ fontWeight: 'bold' }}>Last Known Location:</Text>
        <Text style={{ marginBottom: 10 }}>{character.location.name}</Text>
        <Text style={{ fontWeight: 'bold' }}>Episodes:</Text>
        <Text style={{ marginBottom: 20 }}>{character.episode.length}</Text>

        {isFavorite ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 5,
              alignItems: 'center',
              marginTop: 20,
              width: '80%',
            }}
            onPress={handleRemoveFromFavorites}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Remove from Favorites</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              padding: 10,
              borderRadius: 5,
              alignItems: 'center',
              marginTop: 20,
              width: '80%',
            }}
            onPress={handleAddToFavorites}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Add to Favorites</Text>
          </TouchableOpacity>
        )}

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
    </ScrollView>
  );
};

export default CharacterDetailsScreen;

