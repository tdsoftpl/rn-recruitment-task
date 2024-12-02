import {StyleSheet} from 'react-native';
import {borderRadius, colors, space} from '../../../../styles/global';

export const styles = StyleSheet.create({
  goToTopButton: {
    position: 'absolute',
    bottom: space.sm,
    right: space.sm,
    padding: space.md,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkGreen,
    borderRadius: borderRadius.pill,
    transform: [{rotate: '180deg'}],
  },
});
