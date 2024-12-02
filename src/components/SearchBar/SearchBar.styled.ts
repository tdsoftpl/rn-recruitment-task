import {StyleSheet} from 'react-native';
import {borderRadius, colors, space} from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.darkGreen,
    borderRadius: borderRadius.pill,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.xs,
    paddingInline: space.sm,
    paddingHorizontal: space.xs,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.xs,
    flex: 1,
  },
  input: {
    color: colors.darkGreen,
    marginRight: space.md,
  },
  deleteBtn: {
    borderRadius: borderRadius.xs,
    height: 20,
    aspectRatio: 1,
  },
  deleteBtnFocused: {
    backgroundColor: colors.greyishGreen,
  },
});
