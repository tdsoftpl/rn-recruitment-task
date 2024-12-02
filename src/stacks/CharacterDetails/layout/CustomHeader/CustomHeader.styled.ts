import {StyleSheet} from 'react-native';
import {colors, space} from '../../../../styles/global';

export const styles = StyleSheet.create({
  container: {
    padding: space.md,
    backgroundColor: colors.lightGreen,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.mediumGreen,
  },
  text: {
    paddingLeft: space.xxs,
    color: colors.mediumGreen,
    borderBottomWidth: 1,
    borderBottomColor: colors.mediumGreen,
  },
});
