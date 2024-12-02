import {StyleSheet} from 'react-native';
import {colors, fontSize, space} from '../../../../styles/global';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: space.xs,
    display: 'flex',
    flexDirection: 'column',
    gap: space.xxs,
    flexShrink: 1,
    borderRadius: 10,
  },
  label: {
    fontSize: fontSize.labelSmall,
    color: colors.mediumGreen,
    textTransform: 'uppercase',
  },
  text: {
    fontSize: fontSize.bodyText,
    color: colors.darkGreen,
    textTransform: 'capitalize',
  },
  accent: {
    backgroundColor: colors.lightGreen,
  },
});
