import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {CharacterProvider} from './src/Context/CharacterContext';
import {MainStack} from './src/stacks/Main';
import NavBar from './src/Components/Atoms/NavBar/NavBar';
import {FavoritesProvider} from './src/Context/FavouritesContext';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <CharacterProvider>
        <FavoritesProvider>
          <NavigationContainer>
            <NavBar />
            <MainStack />
          </NavigationContainer>
        </FavoritesProvider>
      </CharacterProvider>
    </QueryClientProvider>
  );
}

export default App;
