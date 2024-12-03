import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CharacterListScreen } from './screens/CharacterList';
import { FavoriteCharactersScreen } from './screens/FavoriteCharacters';
import { CharacterDetailsScreen } from '../screens/CharacterDetails';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        freezeOnBlur: false, //disable screen freeze 
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === 'Characters') {
            iconSource = require('../assets/icons/morty.png');
          } else if (route.name === 'Favorites') {
            iconSource = require('../assets/icons/heart.png');
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 25,
                height: 25,
              }}
            />
          );
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#FF9F1C', //orange
        tabBarInactiveTintColor: '#808080', //gray
      })}
    >
      <Tab.Screen
        name="Characters"
        component={CharacterListScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteCharactersScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
