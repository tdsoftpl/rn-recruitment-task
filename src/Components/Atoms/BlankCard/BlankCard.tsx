import React from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './BlankCard.styled';
import {BlankCardProps} from './BlankCard.types';

interface Props extends BlankCardProps {
  style?: ViewStyle;
}

function BlankCard({children, style}: Props) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export default BlankCard;
