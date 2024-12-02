import React from 'react';
import {StyleSheet, View} from 'react-native';
import CharactersContextProvider from '../context/CharactersContext';
import {Navbar} from './Navbar/Navbar';
import {Footer} from './Footer/Footer';
import {QueryClient, QueryClientProvider} from 'react-query';
import {colors} from '../styles/global';

const queryClient = new QueryClient();

export default function AppLayout({children}: {children: React.ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      <CharactersContextProvider>
        <View style={styles.container}>
          <Navbar />
          {children}
          <Footer />
        </View>
      </CharactersContextProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
