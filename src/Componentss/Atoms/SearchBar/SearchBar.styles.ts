import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#224229',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 40,
    backgroundColor: '#fff',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#224229',
  },
  clearButton: {
    marginLeft: 8,
  },
});

export default styles;
