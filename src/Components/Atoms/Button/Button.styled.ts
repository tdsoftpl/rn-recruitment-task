import {StyleSheet} from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.shape.borderRadius.large,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: theme.shape.borderWidth,
  },

  primaryFilledButton: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  primaryText: {
    color: theme.colors.white,
  },
  primaryIcon: {
    color: theme.colors.primary,
  },

  primaryOutlinedButton: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
  },
  primaryOutlinedText: {
    color: theme.colors.primary,
  },

  whiteIcon: {
    color: theme.colors.white,
  },
  goldIcon: {
    color: theme.colors.gold,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
});

export default styles;
