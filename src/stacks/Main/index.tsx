import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigationStack } from '../TabNavigation';
import { CharacterDetailsStack } from '../CharacterDetails';
import { MainStackParamList, MainStackRoutes } from './Main.routes';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MainStackRoutes.TabNavigationStack}
        component={TabNavigationStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MainStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
