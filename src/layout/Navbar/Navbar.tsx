import React from 'react';
import {View} from 'react-native';
import {styles} from './Navbar.styled';
import RickAndMortyImage from '../../components/RickAndMortyImage/RickAndMortyImage';

export function Navbar() {
  return (
    <View style={styles.container}>
      <RickAndMortyImage styles={styles.image} />
    </View>
  );
}
