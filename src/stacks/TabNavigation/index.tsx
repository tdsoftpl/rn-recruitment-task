import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import Footer from '../../Components/Atoms/Footer/Footer';
import theme from '../../theme/theme';

const Tab = createBottomTabNavigator();

const TabBarLabel = React.memo(
  ({label, focused}: {label: string; focused: boolean}) => (
    <View style={styles.labelContainer}>
      <Text
        style={[
          styles.tabLabel,
          focused ? styles.tabLabelFocused : styles.tabLabelUnfocused,
        ]}>
        {label}
      </Text>
      {focused && <View style={styles.underline} />}
    </View>
  ),
);

const getTabBarIcon = (routeName: string, focused: boolean, color: string) => {
  const iconName =
    routeName === 'All Characters'
      ? focused
        ? 'person'
        : 'person-outline'
      : focused
      ? 'star'
      : 'star-outline';
  return (
    <Icon name={iconName} size={24} color={color || theme.colors.text.white} />
  );
};

const getTabBarLabel = (routeName: string, focused: boolean) => {
  const label =
    routeName === 'All Characters' ? 'ALL CHARACTERS' : 'LIKED CHARACTERS';
  return <TabBarLabel label={label} focused={focused} />;
};

export const TabNavigationStack = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const screenOptions = ({route}: any) => ({
    tabBarIcon: ({focused, color}: {focused: boolean; color: string}) =>
      getTabBarIcon(route.name, focused, color),
    tabBarLabel: ({focused}: {focused: boolean}) =>
      getTabBarLabel(route.name, focused),
    tabBarStyle: [styles.tabBar, isKeyboardVisible && styles.tabBarHidden],
    tabBarActiveTintColor: theme.colors.text.white,
    tabBarInactiveTintColor: theme.colors.text.secondary,
    headerShown: false,
  });

  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="All Characters" component={CharacterListScreen} />
        <Tab.Screen
          name="Liked Characters"
          component={FavoriteCharactersScreen}
        />
      </Tab.Navigator>
      {!isKeyboardVisible && <Footer />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  labelContainer: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: theme.typography.labelMedium.fontSize,
    fontWeight: theme.typography.labelMedium.fontWeight as any,
    textAlign: 'center',
  },
  tabLabelFocused: {
    color: theme.colors.text.white,
  },
  tabLabelUnfocused: {
    color: theme.colors.text.secondary,
  },
  underline: {
    width: '60%',
    height: theme.shape.borderWidth,
    backgroundColor: theme.colors.text.white,
    alignSelf: 'center',
  },
  tabBar: {
    backgroundColor: theme.colors.background.primary,
    borderTopWidth: theme.shape.borderWidth,
    elevation: 0,
  },
  tabBarHidden: {
    display: 'none',
  },
});
