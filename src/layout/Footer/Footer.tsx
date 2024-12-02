import React from 'react';
import {View} from 'react-native';
import {styles} from './Footer.styled';
import RickAndMortyImage from '../../components/RickAndMortyImage/RickAndMortyImage';

export function Footer() {
  return (
    <View style={styles.container}>
      <RickAndMortyImage styles={styles.image} />
    </View>
  );
}
