import React from 'react';
import {View, Image} from 'react-native';
import navbarImage from '../../../Assets/Image/nav.png';
import styles from './NavBar.styled';

const NavBar = () => {
  return (
    <View style={styles.navbarContainer}>
      <Image source={navbarImage} style={styles.navbarImage} />
    </View>
  );
};

export default NavBar;
