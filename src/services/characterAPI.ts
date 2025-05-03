const BASE_URL = 'https://rickandmortyapi.com/api';

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  gender: string;
};

export const getCharactersByPage = async (
  page: number,
): Promise<{characters: Character[]; totalPages: number}> => {
  try {
    const response = await fetch(`${BASE_URL}/character?page=${page}`);
    const data = await response.json();

    return {
      characters: data.results,
      totalPages: data.info.pages,
    };
  } catch (error) {
    console.error('Failed to fetch paginated characters:', error);
    return {
      characters: [],
      totalPages: 0,
    };
  }
};

export const getSearchedCharacters = async (
  query: string,
  page: number,
): Promise<{characters: Character[]; totalPages: number}> => {
  try {
    const url =
      query.length === 0
        ? `${BASE_URL}/character?page=${page}`
        : `${BASE_URL}/character/?name=${query}&page=${page}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      characters: data.results || [],
      totalPages: data.info?.pages || 1,
    };
  } catch (error) {
    console.error('Failed to fetch searched characters:', error);
    return {
      characters: [],
      totalPages: 0,
    };
  }
};

export const getFilteredCharacters = async (
  statuses: string[],
  speciesList: string[],
  page: number,
): Promise<{characters: Character[]; totalPages: number}> => {
  try {
    const queryParams: string[] = [];

    if (statuses.length > 0) {
      queryParams.push(`status=${encodeURIComponent(statuses[0])}`);
    }

    if (speciesList.length > 0) {
      queryParams.push(`species=${encodeURIComponent(speciesList[0])}`);
    }

    if (queryParams.length === 0) {
      return getCharactersByPage(page);
    }

    const query = `${queryParams.join('&')}&page=${page}`;
    const response = await fetch(`${BASE_URL}/character/?${query}`);
    const data = await response.json();

    return {
      characters: data.results || [],
      totalPages: data.info?.pages || 1,
    };
  } catch (error) {
    console.error('Failed to fetch filtered characters:', error);
    return {
      characters: [],
      totalPages: 0,
    };
  }
};
