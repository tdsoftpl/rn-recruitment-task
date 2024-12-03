// App.tsx

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';

import { MainStack } from './src/stacks/Main';
import Footer from './src/stacks/components/Footer'; 
import { View, StyleSheet } from 'react-native';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // double try
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App(): React.JSX.Element {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
          {/* <Footer /> */}
        </View>
      </QueryClientProvider>
    </JotaiProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
