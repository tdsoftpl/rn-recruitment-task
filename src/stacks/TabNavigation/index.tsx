import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import AvatarIcon from '../../icons/Avatar';
import StarIcon from '../../icons/Star';
import {colors, fontSize, space} from '../../styles/global';
import type {IconProps} from '../../icons/types';

const Tab = createBottomTabNavigator();

const NAVIGATION_HEIGHT = 70;

export const TabNavigationStack = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          sceneStyle: {backgroundColor: colors.lightGreen},
          tabBarStyle: {
            backgroundColor: colors.darkGreen,
            height: NAVIGATION_HEIGHT,
          },
          tabBarInactiveTintColor: colors.greyishGreen,
          tabBarActiveTintColor: 'white',
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="All Characters"
          component={CharacterListScreen}
          options={{
            tabBarIcon: ({color, focused}) =>
              TabIcon({
                Icon: AvatarIcon,
                name: 'All Characters',
                color,
                size: 16,
                focused,
              }),
          }}
        />
        <Tab.Screen
          name="Liked Characters"
          component={FavoriteCharactersScreen}
          options={{
            tabBarIcon: ({color, focused}) =>
              TabIcon({
                Icon: StarIcon,
                name: 'Liked Characters',
                color,
                size: 16,
                focused,
              }),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

type TabIconProps = {
  name: string;
  color: string;
  size: number;
  focused: boolean;
  Icon: React.FC<IconProps>;
};

function TabIcon({name, color, size, focused, Icon}: TabIconProps) {
  return (
    <View
      style={[
        tabStyles.container,
        focused ? getContainerFocusedStyle(color) : {},
      ]}>
      <View style={tabStyles.icon}>
        <Icon color={color} size={size} />
      </View>
      <Text style={[{color: color}, tabStyles.text]}>{name}</Text>
    </View>
  );
}

const tabStyles = StyleSheet.create({
  container: {
    height: NAVIGATION_HEIGHT,
    width: 200,
    marginTop: 26,
    borderBottomWidth: 1,
    borderColor: 'transparent',
    padding: space.md,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fontSize.labelMedium,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  icon: {
    paddingBottom: space.xxs,
  },
});
const getContainerFocusedStyle = (color: string) => ({
  borderColor: color,
});
