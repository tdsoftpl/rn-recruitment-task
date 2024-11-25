export const theme = {
  colors: {
    primary: '#162c1b',
    secondary: '#F4F6F5',
    white: '#FFFFFF',
    gold: '#f89f34',
    text: {
      primary: '#162c1b',
      secondary: '#F4F6F5',
      white: '#FFFFFF',
      gold: '#f89f34',
    },
    background: {
      primary: '#162c1b',
      secondary: '#F4F6F5',
    },
  },
  typography: {
    bodyText: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400' as '400',
    },
    buttonText: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500' as '500',
    },
    labelSmall: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '400' as '400',
    },
    labelMedium: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500' as '500',
    },
    heading: {
      fontSize: 36,
      lineHeight: 44,
      fontWeight: '700' as '700',
    },
    bodyTextSmall: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '400' as '400',
    },
  },
  shape: {
    borderRadius: {
      small: 4,
      medium: 12,
      large: 24,
    },
    borderWidth: 1,
  },
  spacing: {
    tiny: 4,
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
  },
} as const;

export default theme;
