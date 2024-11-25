import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: theme.typography.bodyTextSmall.fontSize,
    color: theme.colors.primary,
    fontWeight: '500',
  },
  clearButton: {
    marginLeft: 8,
  },
});

export default styles;
