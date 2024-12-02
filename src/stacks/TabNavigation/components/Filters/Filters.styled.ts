import {StyleSheet} from 'react-native';
import {colors, fontSize, space} from '../../../../styles/global';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  filterBtn: {
    flexDirection: 'row-reverse',
    gap: space.xs,
  },
  iconRotate: {
    transform: [{rotate: '180deg'}],
  },
  filtersContainer: {
    width: '100%',
    display: 'none',
    gap: space.lg,
    marginTop: space.xs,
    padding: space.md,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primaryGreen,
    borderRadius: 12,
  },
  open: {
    display: 'flex',
  },
  filtersSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: space.xs,
  },
  filtersHeader: {
    color: colors.mediumGreen,
    fontSize: fontSize.labelMedium,
    textTransform: 'uppercase',
  },
  btnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: space.md,
  },
});
