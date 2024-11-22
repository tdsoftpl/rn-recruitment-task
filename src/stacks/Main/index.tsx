import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharacterDetailsStack } from '../CharacterDetails';
import { TabNavigationStack } from '../TabNavigation';
import { MainStackRoutes } from './Main.routes';
import Footer from '../../Componentss/Atoms/Footer/Footer';
import { View, StyleSheet } from 'react-native';

const Tab = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name={MainStackRoutes.TabNavigationStack}
          component={TabNavigationStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={MainStackRoutes.CharacterDetailsStack}
          component={CharacterDetailsStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#162c1b',

  },
});
