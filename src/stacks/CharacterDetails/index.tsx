import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CharacterDetailsStackRoutes} from './CharacterDetails.routes';
import {CharacterDetailsScreen} from './screens';
import CustomHeader from './layout/CustomHeader/CustomHeader';

const Stack = createNativeStackNavigator();

export const CharacterDetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={CharacterDetailsStackRoutes.CharacterDetailsScreen}
        children={CharacterDetailsScreen}
        options={{
          headerTitle: 'Go back to Characters List',
          header: CustomHeader,
        }}
      />
    </Stack.Navigator>
  );
};
