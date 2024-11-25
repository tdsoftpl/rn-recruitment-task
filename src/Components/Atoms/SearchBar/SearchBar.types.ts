export interface SearchBarProps {
    searchQuery: string;
    onSearchChange: (text: string) => void;
    onClear: () => void;
    placeholder?: string;
  }
