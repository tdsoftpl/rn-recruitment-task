import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../../../../styles/global';

export default function LoadingSpinner() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color={colors.darkGreen} size={'large'} />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
