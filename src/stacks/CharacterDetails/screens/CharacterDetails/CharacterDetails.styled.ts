import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    
    width: '100%',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    
    color: '#333',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    alignSelf: 'flex-start',
    
  },
  value: {
    fontSize: 16,
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  favoriteButton: {
    backgroundColor: '#FF9F1C',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  favoriteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
  removeButton: {
    backgroundColor: '#FF4136', 
  },
 
});
