import {StyleSheet} from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoContainer: {
    flex: 1,
    marginTop: theme.spacing.small,
  },
  label: {
    fontSize: theme.typography.labelSmall.fontSize,
    fontWeight: theme.typography.labelSmall.fontWeight as '400' | '500' | '700',
    color: theme.colors.text.primary,
  },
  value: {
    fontSize: theme.typography.bodyText.fontSize,
    fontWeight: theme.typography.bodyText.fontWeight as '400' | '500' | '700',
    color: theme.colors.primary,
    marginBottom: theme.spacing.tiny,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: 180,
    height: 200,
    borderRadius: theme.shape.borderRadius.medium,
    borderColor: theme.colors.primary,
    borderWidth: theme.shape.borderWidth,
  },
  buttonOnImage: {
    position: 'absolute',
    bottom: theme.spacing.small,
    right: theme.spacing.small,
  },
});

export default styles;
