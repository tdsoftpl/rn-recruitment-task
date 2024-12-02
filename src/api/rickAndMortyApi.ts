import axios from 'axios';
import type {CharactersInfo, Character} from '../types/CharactersInfo';
import type {Filters} from '../types/Filters';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

/**
 * An API utility for interacting with the Rick and Morty API.
 */
export const rickAndMortyApi = {
  /**
   * Generates a URL for the Rick and Morty API with the given parameters.
   * All parameters are optional.
   *
   * @param {number} [page] - The page number to fetch.
   * @param {string} [searchedValue] - A search term to filter results by name.
   * @param {Filters} [filters] - An object containing additional filters such as status and species.
   * @returns {string} - The complete API URL with query parameters.
   */
  createApiUrl: (page?: number, searchedValue?: string, filters?: Filters) => {
    const queryParams = [];

    if (page) {
      queryParams.push(`page=${page}`);
    }

    if (searchedValue) {
      // Use encodeURIComponent to handle special characters in the search term
      queryParams.push(`name=${encodeURIComponent(searchedValue)}`);
    }

    if (filters?.status) {
      queryParams.push(`status=${filters.status}`);
    }

    if (filters?.species) {
      queryParams.push(`species=${filters.species}`);
    }

    return `${BASE_URL}${
      queryParams.length > 0 ? '/?' + queryParams.join('&') : ''
    }`;
  },

  /**
   * Fetches characters from the Rick and Morty API based on the given search term and filters.
   * All parameters are optional - if no search term or filters are provided, first page of characters will be fetched.
   *
   * @param {string} [searchedValue] - A search term to filter results by name.
   * @param {Filters} [filters] - An object containing additional filters such as status and species.
   * @returns {Promise<CharactersInfo>} - A promise that resolves to the character information.
   */
  fetchCharacters: async (searchedValue?: string, filters?: Filters) => {
    const url = rickAndMortyApi.createApiUrl(undefined, searchedValue, filters);
    const response = await axios.get(url);

    return response.data as CharactersInfo;
  },

  /**
   * Fetches the next page of characters from the Rick and Morty API.
   * The current page number is required to fetch the next page.
   * All other parameters are optional.
   *
   * @param {number} currentPage - The current page number.
   * @param {string} [searchedValue] - A search term to filter results by name.
   * @param {Filters} [filters] - An object containing additional filters such as status and species.
   * @returns {Promise<CharactersInfo>} - A promise that resolves to the character information for the next page.
   */
  fetchNextPage: async (
    currentPage: number,
    searchedValue?: string,
    filters?: Filters,
  ) => {
    const url = rickAndMortyApi.createApiUrl(
      currentPage + 1,
      searchedValue,
      filters,
    );
    const response = await axios.get(url);

    return response.data as CharactersInfo;
  },

  /**
   * Fetches characters by their IDs from the Rick and Morty API.
   *
   * @param {number[]} likedCharactersIds - An array of character IDs to fetch.
   * @returns {Promise<Character[]>} - A promise that resolves to an array of character details.
   */
  fetchLikedCharacters: async (likedCharactersIds: number[]) => {
    if (likedCharactersIds.length === 0) {
      return [];
    }

    const response = await axios.get(
      `${BASE_URL}/${likedCharactersIds.join(',')}`,
    );

    return response.data as Character[];
  },
};
