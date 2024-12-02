import React from 'react';
import {useRoute, type RouteProp} from '@react-navigation/native';
import {ScrollView, View} from 'react-native';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import {styles} from './CharacterDetails.styled';
import type {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';

export default function CharacterDetailsScreen() {
  const route =
    useRoute<
      RouteProp<CharacterDetailsStackParamList, 'CharacterDetailsScreen'>
    >();
  const {characterData} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        {characterData && (
          <View style={styles.innerContainer}>
            <CharacterCard data={characterData} detailed={true} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}
