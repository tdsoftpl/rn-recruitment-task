export interface CharacterInfoProps {
  label: string;
  value: string;
}


export type CharacterStackParamList = {
  CharacterDetailsStack: {
    screen: 'CharacterDetailsScreen';
    params: { character: Character };
  };
};

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface PaginatedResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}
