import {StyleSheet} from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.medium,
    marginBottom: theme.spacing.small,
  },
  filterButton: {
    paddingVertical: theme.spacing.small,
    marginHorizontal: theme.spacing.small,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.shape.borderRadius.large,
    alignItems: 'center',
    width: 120,
  },
  filterButtonText: {
    color: theme.colors.white,
    fontWeight: theme.typography.buttonText.fontWeight,
    fontSize: theme.typography.buttonText.fontSize,
  },
  dropdown: {
    marginTop: theme.spacing.medium,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.white,
    borderRadius: theme.shape.borderRadius.medium,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  heading: {
    fontWeight: theme.typography.heading.fontWeight,
    fontSize: theme.typography.labelMedium.fontSize,
    marginBottom: theme.spacing.medium,
    color: theme.colors.primary,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.small,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius.small,
    marginRight: theme.spacing.small,
  },
  checked: {
    backgroundColor: theme.colors.primary,
  },
  checkmark: {
    color: theme.colors.white,
    fontWeight: theme.typography.buttonText.fontWeight,
  },
  checkboxLabel: {
    fontSize: theme.typography.labelSmall.fontSize,
    color: theme.colors.text.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.medium,
  },
  resetButton: {
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.medium,
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: theme.shape.borderRadius.large,
  },
  resetButtonText: {
    color: theme.colors.primary,
    fontWeight: theme.typography.buttonText.fontWeight,
  },
  applyButton: {
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.medium,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.shape.borderRadius.large,
  },
  applyButtonText: {
    color: theme.colors.white,
    fontWeight: theme.typography.buttonText.fontWeight,
  },
});

export default styles;
