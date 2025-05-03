import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import Logo from '../../../assets/svg/Rick_and_Morty_1.svg';
import {View, Text} from 'react-native';
import CharcterIcon from '../../../assets/svg/characterIcon.svg';
import FavoriteIcon from '../../../assets/svg/favoriteIcon.svg';

const Tab = createBottomTabNavigator();

const TabsIcon = ({icon: Icon, title}: any) => {
  return (
    <View className="items-center justify-center h-full mt-12">
      <Icon width={24} height={24} />
      <Text
        className={`text-base font-normal mt-1 h-full w-full text-white`}>
        {title}
      </Text>
    </View>
  );
};

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {backgroundColor: '#162C1B'},
        headerTitleAlign: 'left',
        headerTitle: () => (
          <View style={{flexDirection: 'row'}}>
            <Logo />
          </View>
        ),
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
        },
        tabBarInactiveBackgroundColor: '#162C1B',
        tabBarActiveBackgroundColor: '#224229',
        tabBarInactiveTintColor: '#162C1B',
        tabBarActiveTintColor: '#224229',
        tabBarStyle: {
          position: 'absolute',
          flexDirection: 'row',
          bottom:-40,
          height: 130,
          borderTopWidth: 0,
          justifyContent: 'center',
          alignItems: 'flex-end',
          backgroundColor: '#224229'
        },
      }}>
      <Tab.Screen
        name="Characters"
        component={CharacterListScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <TabsIcon icon={CharcterIcon} title="ALL CHARACTERS" />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteCharactersScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => <TabsIcon icon={FavoriteIcon} title="LIKED CHARACTERS" />,
        }}
      />
    </Tab.Navigator>
  );
};
