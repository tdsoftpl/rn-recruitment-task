import {StyleSheet} from 'react-native';
import theme from '../../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.small,
    backgroundColor: theme.colors.background.secondary,
  },
  heading: {
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight as any,
    marginBottom: theme.spacing.large,
    color: theme.colors.text.primary,
  },
  loader: {
    marginVertical: theme.spacing.medium,
  },
  noResultsText: {
    fontSize: theme.typography.bodyText.fontSize,
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginVertical: theme.spacing.large,
  },
  errorText: {
    fontSize: theme.typography.bodyText.fontSize,
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginVertical: theme.spacing.large,
  },
});

export default styles;
