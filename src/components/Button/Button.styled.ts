import {StyleSheet} from 'react-native';
import {borderRadius, colors, fontSize, space} from '../../styles/global';

export const styles = StyleSheet.create({
  btn: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBlock: space.xs,
    paddingInline: space.md,
    borderWidth: 1,
    borderRadius: borderRadius.pill,
    fontSize: fontSize.buttonText,
  },
  primary: {
    color: colors.white,
    backgroundColor: colors.primaryGreen,
    borderColor: colors.primaryGreen,
  },
  primaryActive: {
    color: colors.white,
    backgroundColor: colors.darkGreen,
    borderColor: colors.darkGreen,
  },
  outline: {
    color: colors.primaryGreen,
    backgroundColor: colors.white,
    borderColor: colors.primaryGreen,
  },
  outlineActive: {
    color: colors.darkGreen,
    backgroundColor: colors.greyishGreen,
    borderColor: colors.primaryGreen,
  },
});
