export interface CharacterContextProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
  }
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
