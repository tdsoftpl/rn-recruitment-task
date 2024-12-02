import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  paginationButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#3D3D49',
  },
  paginationText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  paginationButtonActive: {
    backgroundColor: '#FF9F1C',
  },
  paginationTextActive: {
    color: '#fff',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    color: '#555',
  },
});
