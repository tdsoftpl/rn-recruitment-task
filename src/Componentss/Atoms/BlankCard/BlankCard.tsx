import React from 'react';
import { View } from 'react-native';
import styles from './BlankCard.styled';
import { BlankCardProps } from './BlankCard.types';

function BlankCard({ children }: BlankCardProps) {
  return <View style={styles.card}>{children}</View>;
}

export default BlankCard;
