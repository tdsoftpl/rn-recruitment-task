import axios from 'axios';
import {
  PaginatedResponse,
  Character,
} from '../Componentss/Molecules/CharacterInfo/CharacterInfo.types';

export const getCharacters = async (
  page: number,
  name?: string,
): Promise<PaginatedResponse<Character>> => {
  try {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character',
      {
        params: {
          page,
          name,
        },
      },
    );

    if (response.data && response.data.results && response.data.info) {
      return response.data;
    }

    throw new Error('Unexpected API response structure');
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw new Error('Failed to fetch characters. Please try again later.');
  }
};

export const fetchCharacterDetails = async (id: number): Promise<Character> => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  return response.data;
};
