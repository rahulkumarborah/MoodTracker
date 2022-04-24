import { StyleSheet, View } from 'react-native';

import MoodPicker from '../components/MoodPicker';
import React from 'react';
import { useAppContext } from '../App.provider';

const HomeScreen: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 10 },
});

export default HomeScreen;
