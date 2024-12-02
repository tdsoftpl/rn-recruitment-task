export type Filters = {
  status?: Status;
  species?: Species;
};

type Status = 'alive' | 'dead' | 'unknown';
type Species = 'human' | 'humanoid';
