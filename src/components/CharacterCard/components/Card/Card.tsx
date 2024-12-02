import React, {type ComponentProps} from 'react';
import {View} from 'react-native';
import {styles} from './Card.styled';

type CardProps = {
  children: React.ReactNode;
} & ComponentProps<typeof View>;

export default function Card({children, ...props}: CardProps) {
  return (
    <View {...props} style={[styles.container, props.style]}>
      {children}
    </View>
  );
}
