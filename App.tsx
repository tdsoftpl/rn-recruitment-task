import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {MainStack} from './src/stacks/Main';
import './globals.css';
import {FavoritesProvider} from './src/services/FavoritesContext';

function App(): React.JSX.Element {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </FavoritesProvider>
  );
}

export default App;
