import {StyleSheet} from 'react-native';
import {colors, fontSize, space} from '../../../../styles/global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingInline: space.md,
  },
  header: {
    marginBottom: space.xl,
  },
  heading: {
    fontSize: fontSize.heading,
    color: colors.darkGreen,
  },
  searchboxContainer: {
    width: '100%',
    marginBlock: space.md,
  },
  listContainer: {
    paddingTop: space.md,
    paddingBottom: space.xl,
  },
  list: {
    flex: 1,
    width: '100%',
  },
  loadingFooter: {
    marginTop: space.md,
  },
});
