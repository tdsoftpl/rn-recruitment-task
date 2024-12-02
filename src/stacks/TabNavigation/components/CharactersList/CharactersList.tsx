import React, {memo, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Animated,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  type FlatListProps,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import Filters from '../Filters/Filters';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../../../components/ErrorMessage/ErrorMessage';
import EmptyList from '../EmptyList/EmptyList';
import Separator from '../Separator/Separator';
import GoToTopBtn from '../GoToTopBtn/GoToTopBtn';
import {styles} from './CharactersList.styled';
import type {MainStackNavigationProp} from '../../../Main/Main.routes';
import type {Character} from '../../../../types/CharactersInfo';

type CharactersListProps = {
  characters?: Character[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
} & Partial<Omit<FlatListProps<Character>, 'data'>>;

function CharactersList({
  characters,
  isLoading,
  isError,
  refetch,
  ...props
}: CharactersListProps) {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const [isScrollToTopButtonVisible, setIsScrollToTopButtonVisible] =
    useState(false);

  // Reference to the FlatList component to programmatically control its scrolling.
  const flatListRef = useRef<FlatList<Character>>(null);
  // Animated value to track the vertical scroll position of the FlatList.
  const scrollY = useRef(new Animated.Value(0)).current;

  // Handles the scroll event for the FlatList.
  const handleScroll = Animated.event(
    // Maps the native scroll event to update the `scrollY` Animated.Value.
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {
      // Disables native driver usage because `listener` requires JavaScript handling.
      useNativeDriver: false,
      // Custom listener to determine if the GoToTopButton should be displayed.
      listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetY = event.nativeEvent.contentOffset.y; // Current scroll position (vertical offset).
        const screenHeight = event.nativeEvent.layoutMeasurement.height; // Height of the visible screen area.

        // Show the button if the user has scrolled more than the screen height.
        setIsScrollToTopButtonVisible(offsetY > screenHeight);
      },
    },
  );

  // Scrolls the FlatList back to the top when the GoToTopButton is pressed.
  function scrollToTop() {
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }

  return (
    <View style={styles.container}>
      {isLoading && <LoadingSpinner />}

      {isError && !characters ? (
        <ErrorMessage refetchData={refetch} />
      ) : (
        <>
          {characters && (
            <>
              <FlatList
                {...props}
                ref={flatListRef}
                contentContainerStyle={styles.listContainer}
                ListHeaderComponent={
                  <View style={styles.header}>
                    <Text style={styles.heading}>Characters</Text>
                    <View style={styles.searchboxContainer}>
                      <SearchBar />
                    </View>

                    <Filters />
                  </View>
                }
                data={characters}
                renderItem={({item}) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={(): void => {
                      navigate('CharacterDetailsStack', {
                        screen: 'CharacterDetailsScreen',
                        params: {
                          characterData: item,
                        },
                      });
                    }}>
                    <CharacterCard data={item} />
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
                initialNumToRender={20}
                ListEmptyComponent={EmptyList}
                ItemSeparatorComponent={Separator}
                onScroll={handleScroll}
                scrollEventThrottle={100}
              />

              {isScrollToTopButtonVisible && (
                <GoToTopBtn activeOpacity={0.95} onPress={scrollToTop} />
              )}
            </>
          )}
        </>
      )}
    </View>
  );
}

export default memo(CharactersList);
