import {StyleSheet} from 'react-native';
import {colors, space} from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGreen,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: space.lg,
  },
  image: {
    width: 301,
    height: 92,
  },
});
