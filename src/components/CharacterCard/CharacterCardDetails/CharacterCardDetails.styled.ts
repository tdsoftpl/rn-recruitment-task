import {StyleSheet} from 'react-native';
import {borderRadius, colors, space} from '../../../styles/global';

export const styles = StyleSheet.create({
  container: {
    padding: space.lg,
    display: 'flex',
    flexDirection: 'column',
    gap: space.md,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.darkGreen,
  },
  mainDetailContainer: {
    marginBottom: space.md,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: space.md,
  },
  infoInnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: space.md,
  },
});
