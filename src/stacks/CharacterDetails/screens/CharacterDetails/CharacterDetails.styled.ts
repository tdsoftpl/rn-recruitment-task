import {StyleSheet} from 'react-native';
import theme from '../../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background.secondary,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.medium,
  },
  iconColor: {
    color: theme.colors.primary,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: theme.shape.borderRadius.large,
    borderWidth: theme.shape.borderWidth,
    borderColor: theme.colors.primary,
    marginBottom: theme.spacing.medium,
  },

  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.medium,
  },
  nameSection: {
    marginBottom: theme.spacing.medium,
    alignItems: 'center',
  },
  name: {
    color: theme.colors.primary,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  characterName: {
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
    color: theme.colors.primary,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  detailLabel: {
    fontSize: theme.typography.labelSmall.fontSize,
    fontWeight: theme.typography.labelSmall.fontWeight,
    color: theme.colors.text.primary,
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    marginBottom: theme.spacing.small,
  },

  detailBox: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.shape.borderRadius.medium,
    padding: theme.spacing.medium,
    marginHorizontal: theme.spacing.tiny,
    alignItems: 'center',
    elevation: 2,
  },

  backText: {
    marginLeft: theme.spacing.small,
    fontSize: theme.typography.bodyText.fontSize,
    fontWeight: theme.typography.bodyText.fontWeight,
    color: theme.colors.primary,
  },
  detailValue: {
    fontSize: theme.typography.bodyText.fontSize,
    fontWeight: theme.typography.bodyText.fontWeight,
    color: theme.colors.primary,
    alignSelf: 'flex-start',
  },
});

export default styles;
