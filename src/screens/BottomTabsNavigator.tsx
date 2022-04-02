import AnalyticsScreen from './AnalyticsScreen';
import HistoryScreen from './HistoryScreen';
import HomeScreen from './HomeScreen';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="History" component={HistoryScreen} />
      <BottomTabs.Screen name="Analytics" component={AnalyticsScreen} />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator;
