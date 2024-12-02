import {StyleSheet} from 'react-native';
import {borderRadius, colors, fontSize, space} from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.xs,
  },
  checkbox: {
    width: 16,
    aspectRatio: 1,
    padding: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.greyishGreen,
    borderRadius: borderRadius.xs,
  },
  checked: {
    backgroundColor: colors.darkGreen,
  },
  label: {
    color: colors.darkGreen,
    fontSize: fontSize.bodyText,
  },
});
