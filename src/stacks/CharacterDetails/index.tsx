import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharacterDetailsStackParamList } from './CharacterDetails.routes';
import CharacterDetailsScreen from './screens/CharacterDetails/CharacterDetails.screen';

const Stack = createNativeStackNavigator<CharacterDetailsStackParamList>();

export const CharacterDetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CharacterDetailsScreen"
        component={CharacterDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
