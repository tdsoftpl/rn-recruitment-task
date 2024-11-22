import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f6f5',
  },
  backText: {
    fontSize: 16,
    color: '#224229',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: '40%',
    borderRadius: 12,
    marginBottom: 16,
  },
  characterName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#224229',
    marginBottom: 16,
    textAlign: 'center',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 16,
  },
  detailBox: {
    width: '48%',
    backgroundColor: '#f4f6f5',
    borderRadius: 10,
    padding: 12,
    alignItems: 'flex-start',
    elevation: 2,
    marginRight: '4%',
  },
  detailLabel: {
    fontSize: 14,
    color: '#4CAF50',
    textTransform: 'uppercase',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  likeButton: {
    marginTop: 16,
    backgroundColor: '#224229',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
  },
  likeButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
