import { StyleSheet, View } from 'react-native';

import MoodPicker from '../components/MoodPicker';
import React from 'react';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <MoodPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 10 },
});

export default HomeScreen;
