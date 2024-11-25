import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Character } from '../../Context/contextTypes';

export type CharacterDetailsStackParamList = {
  CharacterDetailsScreen: { character: Character };
};

export type CharacterDetailsStackNavigationProp =
  NativeStackNavigationProp<CharacterDetailsStackParamList>;

export const CharacterDetailsStackRoutes: {
  [route in keyof CharacterDetailsStackParamList]: route;
} = {
  CharacterDetailsScreen: 'CharacterDetailsScreen',
};
