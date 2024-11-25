import {StyleSheet} from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.background.secondary,
    borderRadius: 20,
    padding: 16,
    margin: 8,
    shadowColor: theme.colors.text.primary,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderBottomWidth: 3,
    borderRightWidth: 3,
  },
});

export default styles;
