import React, {useDeferredValue, useEffect, useRef, useState} from 'react';
import {useCharacters} from '../../hooks/useCharacters';
import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import SearchIcon from '../../icons/Search';
import XIcon from '../../icons/XIcon';
import {styles} from './SearchBar.styled';
import {colors} from '../../styles/global';

export default function SearchBar() {
  const {searchedValue, setSearchedValue} = useCharacters();

  const [inputValue, setInputValue] = useState(searchedValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const [isClearBtnHovered, setIsClearBtnHovered] = useState(false);

  const inputRef = useRef<TextInput>(null);
  // Use deferred value for inputValue to avoid unnecessary re-renders
  const deferredValue = useDeferredValue(inputValue);

  // Synchronize inputValue with searchedValue in context
  useEffect(() => {
    if (!isFocused) {
      setInputValue(searchedValue || '');
    }
  }, [searchedValue, isFocused]);

  // Update searchedValue in context based on deferredValue
  useEffect(() => {
    // Prepare the value by trimming, lowercasing and removing extra spaces
    const preparedValue = deferredValue
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');

    setSearchedValue(preparedValue);
  }, [deferredValue, setSearchedValue]);

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <SearchIcon size={20} color={colors.darkGreen} />
          <TextInput
            value={inputValue}
            placeholder={!isFocused ? 'Search the characters' : undefined}
            placeholderTextColor={colors.mediumGreen}
            cursorColor={colors.darkGreen}
            style={styles.input}
            maxLength={40}
            ref={inputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={e => setInputValue(e)}
          />
        </View>

        {inputValue ? (
          <TouchableOpacity
            activeOpacity={1}
            style={[
              styles.deleteBtn,
              isClearBtnHovered && styles.deleteBtnFocused,
            ]}
            onPressIn={() => setIsClearBtnHovered(true)}
            onPressOut={() => setIsClearBtnHovered(false)}
            onPress={() => setInputValue('')}>
            <XIcon size={20} color={colors.darkGreen} />
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
}
