

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/icons/rickHeader.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%', 
    height: 80,
    backgroundColor: '#162C1B',
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  headerImage: {
    height: '100%',
    alignSelf: 'flex-start',
  },
});
