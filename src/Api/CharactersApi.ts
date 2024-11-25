import axios from 'axios';
import {
  PaginatedResponse,
  Character,
} from '../Components/Molecules/CharacterInfo/CharacterInfo.types';

export const getCharacters = async (
  page: number,
  name?: string,
  filters?: {status?: string; species?: string},
): Promise<PaginatedResponse<Character>> => {
  try {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character',
      {
        params: {
          page,
          name,
          status: filters?.status || undefined,
          species: filters?.species || undefined,
        },
      },
    );

    if (response.data && response.data.results && response.data.info) {
      return response.data;
    }

    throw new Error('Unexpected API response structure');
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || 'Network error occurred.');
    }
    throw new Error('Failed to fetch characters. Please try again later.');
  }
};

export const fetchCharacterDetails = async (id: number): Promise<Character> => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching character details:', error);
    throw new Error(
      'Failed to fetch character details. Please try again later.',
    );
  }
};
