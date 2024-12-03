import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    width: '100%', 
    paddingTop: 16, 
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 16, 
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  cardWrapper: {
    width: '90%', 
    paddingTop: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderColor: '#224229',
    shadowColor: '#224229', 
    shadowOffset: { width: 4, height: 4 }, 
    shadowOpacity: 1, 
    shadowRadius: 0, 
    elevation: 5, 
    marginBottom: 16,
    overflow: 'hidden', 
  },
  
  
  imageWrapper: {
    alignItems: 'center',
  },
  characterImage: {
    width: 310,
    height: 310,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#224229',
  },
  
  detailsContainer: {
    backgroundColor: '#FFFFFF',
    
    width: '100%', 
    
    padding: 24,
    gap: 16,
  },
  labelName: {
    fontFamily: 'DM Mono',
    fontSize: 14,
    fontWeight: '500',
    color: '#59695C',
    letterSpacing: 0.8,
  },
  nameText: {
    fontFamily: 'Inter',
    fontSize: 36,
    fontWeight: '500',
    color: '#162C1B',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  infoBlock: {
    width: 147,
    height: 55,
    padding: 8,
    backgroundColor: '#F4F6F5',
    borderRadius: 10,
    gap : 4,
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'DM Mono',
    fontSize: 12,
    fontWeight: '500',
    color: '#59695C',
    letterSpacing: 0.8,
  },
  bodyText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    color: '#162C1B',
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: '100%',
    borderRadius: 100,
    marginTop: 24,
    alignSelf: 'center',
  },
  buttonInactive: {
    backgroundColor: '#224229',
  },
  buttonActive: {
    backgroundColor: '#162C1B',
  },
  favoriteIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  favoriteText: {
    fontFamily: 'DM Mono',
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
  },
});

export { styles };
