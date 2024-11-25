import {StyleSheet} from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
  navbarContainer: {
    height: 60,
    width: '100%',
    backgroundColor: theme.colors.primary,
  },
  navbarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
