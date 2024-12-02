import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {MainStack} from './src/stacks/Main';
import AppLayout from './src/layout';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AppLayout>
        <MainStack />
      </AppLayout>
    </NavigationContainer>
  );
}

export default App;
