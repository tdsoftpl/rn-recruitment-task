
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CharacterProvider } from './src/Context/CharacterContext';
import { MainStack } from './src/stacks/Main';
import NavBar from './src/Componentss/Atoms/NavBar/NavBar';
import { FavoritesProvider } from './src/Context/FavouritesContext';


const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
    <CharacterProvider>
        <NavigationContainer>
        <NavBar/>
          <MainStack />
        </NavigationContainer>
      </CharacterProvider>
      </FavoritesProvider>
    </QueryClientProvider>
  );
}

export default App;
