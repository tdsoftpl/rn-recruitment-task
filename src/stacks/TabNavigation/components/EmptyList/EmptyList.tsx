import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, fontSize} from '../../../../styles/global';

export default function EmptyList() {
  return <Text style={styles.emptyList}>No characters found</Text>;
}

const styles = StyleSheet.create({
  emptyList: {
    fontSize: fontSize.labelMedium,
    color: colors.darkGreen,
    textAlign: 'center',
  },
});
