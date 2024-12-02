import {StyleSheet} from 'react-native';
import {borderRadius, colors, fontSize, space} from '../../../styles/global';

export const styles = StyleSheet.create({
  container: {
    width: '98%',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  infoContainer: {
    flexShrink: 1,
  },
  infoSection: {
    padding: space.xs,
    display: 'flex',
    gap: space.xxs,
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
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: 200,
    aspectRatio: 1,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.darkGreen,
  },
  likeBtn: {
    position: 'absolute',
    bottom: space.xs,
    right: space.xs,
    paddingBlock: space.xs,
    paddingInline: 0,
    paddingLeft: space.sm,
    paddingRight: space.md,
  },
});
