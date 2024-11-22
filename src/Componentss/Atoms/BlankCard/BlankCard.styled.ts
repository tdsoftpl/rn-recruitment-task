import { DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: DefaultTheme.colors.background,
    borderRadius: 20,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderColor: '#224229',
    borderWidth: 1,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomColor: '#e6e6e6',
    borderRightColor: '#e6e6e6',
  },
});

export default styles;
