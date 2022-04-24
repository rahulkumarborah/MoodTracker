import AppProvider from './App.provider';
import BottomTabsNavigator from './screens/BottomTabsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
