import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  infoContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  value: {
    fontSize: 16,
    color: '#224229',
    marginBottom: 8,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  likeButton: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  likeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  liked: {
    backgroundColor: '#FFD700',
  },
  notLiked: {
    backgroundColor: '#DDD',
  },
});

export default styles;
