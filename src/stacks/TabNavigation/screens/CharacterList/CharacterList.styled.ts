import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  species: {
    fontSize: 14,
    color: '#555',
  },
  status: {
    fontSize: 14,
    color: '#888',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  filterTagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  filterTag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  filterTagSelected: {
    backgroundColor: '#FF9F1C',
    borderColor: '#FF9F1C',
  },
  filterTagText: {
    fontSize: 14,
    color: '#555',
  },
  filterTagTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationButton: {
    marginHorizontal: 5,
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#3D3D49',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationButtonActive: {
    backgroundColor: '#FF9F1C',
  },
  paginationText: {
    color: 'white',
    fontSize: 14,
  },
  paginationTextActive: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export {styles};
