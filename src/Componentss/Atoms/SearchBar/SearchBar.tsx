import React from 'react';
import { TextInput, View } from 'react-native';
import { SearchBarProps } from './SearchBar.types';
import styles from './SearchBar.styles';

const SearchBar = ({ searchQuery, onSearchChange, placeholder }: SearchBarProps) => {
  return (
    <View style={styles.searchContainer}>

      <TextInput
        style={styles.searchInput}
        placeholder={placeholder || 'Search the characters'}
        placeholderTextColor="#666"
        value={searchQuery}
        onChangeText={onSearchChange}
      />


    </View>
  );
};

export default SearchBar;
