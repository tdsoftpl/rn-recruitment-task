import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {Character} from '../../types/CharactersInfo';

export type CharacterDetailsStackParamList = {
  CharacterDetailsScreen: {
    characterData: Character;
  };
};

export type CharacterDetailsStackNavigationProp =
  NativeStackNavigationProp<CharacterDetailsStackParamList>;

export const CharacterDetailsStackRoutes: {
  [route in keyof CharacterDetailsStackParamList]: route;
} = {
  CharacterDetailsScreen: 'CharacterDetailsScreen',
};
