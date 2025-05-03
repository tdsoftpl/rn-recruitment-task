import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterDetailsStackRoutes} from './CharacterDetails.routes';
import {CharacterDetailsScreen} from './screens';
import Logo from '../../../assets/svg/Rick_and_Morty_1.svg';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

export const CharacterDetailsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {backgroundColor: '#162C1B'},
        headerTitleAlign: 'left',
        headerTitle: () => (
          <View style={{flexDirection: 'row', width:'100%'}}>
            <Logo />
          </View>
        ),
      }}>
      <Stack.Screen
        name={CharacterDetailsStackRoutes.CharacterDetailsScreen}
        children={CharacterDetailsScreen}
      />
    </Stack.Navigator>
  );
};
