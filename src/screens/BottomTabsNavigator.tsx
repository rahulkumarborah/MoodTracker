import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/Icons';

import AnalyticsScreen from './AnalyticsScreen';
import HistoryScreen from './HistoryScreen';
import HomeScreen from './HomeScreen';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../theme';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />;
          }

          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size} />;
          }

          return null;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Today's Mood" }}
      />
      <BottomTabs.Screen
        name="History"
        component={HistoryScreen}
        options={{ title: 'Past Moods' }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{ title: 'Fancy Graphs' }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator;
