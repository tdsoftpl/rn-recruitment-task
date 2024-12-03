

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import rick from '../assets/icons/rickFooter.png';


const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image
        source={rick}
        style={styles.footerImage}
        resizeMode="contain"
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 140,
    backgroundColor: '#162C1B',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, 
  },
  footerImage: {
    width: '100%',
    height: '100%',
  },
});
