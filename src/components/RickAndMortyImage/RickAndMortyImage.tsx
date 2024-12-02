import React from 'react';
import {Image, View, type ImageStyle, type StyleProp} from 'react-native';

export default function RickAndMortyImage({
  styles,
}: {
  styles: StyleProp<ImageStyle>;
}) {
  return (
    <View>
      <Image
        source={require('../../assets/rick_and_morty-background.png')}
        alt="Rick And Morty"
        style={styles}
      />
    </View>
  );
}
