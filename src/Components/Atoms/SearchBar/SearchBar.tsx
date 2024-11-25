import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './SearchBar.styles';
import theme from '../../../theme/theme';

type SearchBarProps = {
  searchQuery: string;
  onSearchChange: (text: string) => void;
  onClear: () => void;
  placeholder?: string;
};

function SearchBar({
  searchQuery,
  onSearchChange,
  onClear,
  placeholder = 'Search the characters',
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color={theme.colors.primary} style={styles.icon} />
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={onSearchChange}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.primary}
      />
      {searchQuery.length > 0 && (
        <TouchableOpacity onPress={onClear} style={styles.clearButton}>
          <Icon name="close-circle" size={20} color={theme.colors.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default SearchBar;
