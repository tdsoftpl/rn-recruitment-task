import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import navbarImage from '../../../Assets/Image/nav.png';

const NavBar = () => {
  return (
    <View style={styles.navbarContainer}>
      <Image source={navbarImage} style={styles.navbarImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    height: 80,
    width: '100%',
  },
  navbarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default NavBar;
