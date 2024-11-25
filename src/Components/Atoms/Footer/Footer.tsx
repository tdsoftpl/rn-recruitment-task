import React from 'react';
import { View, Image } from 'react-native';
import styles from './Footer.styled';
import footerImage from '../../../Assets/Image/footer.png';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image source={footerImage} style={styles.footerImage} />
    </View>
  );
};

export default Footer;
