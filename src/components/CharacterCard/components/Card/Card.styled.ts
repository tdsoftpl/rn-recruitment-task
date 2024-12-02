import {StyleSheet} from 'react-native';
import {borderRadius, colors, space} from '../../../../styles/global';

export const styles = StyleSheet.create({
  container: {
    padding: space.sm,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.darkGreen,
    borderRadius: borderRadius.lg,
    boxShadow: `5px 5px ${colors.darkGreen}`,
  },
});
