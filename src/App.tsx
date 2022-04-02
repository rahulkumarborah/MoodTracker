import BottomTabsNavigator from './screens/BottomTabsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default App;
