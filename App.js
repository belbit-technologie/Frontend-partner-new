import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigater from './src/routes/AppNavigater';

function App() {
  return (
    <NavigationContainer>
      <AppNavigater />
    </NavigationContainer>
  );
}

export default App;
