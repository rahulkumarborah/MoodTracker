import { MoodOptionType, MoodOptionWithTimestamp } from './types';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext } from 'react';

type AppData = {
  moodList: MoodOptionWithTimestamp[];
};

const dataKey = 'my-app-data';

const setAppData = async (data: AppData): Promise<void> => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(data));
  } catch {}
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(dataKey);
    if (data) {
      return JSON.parse(data);
    }
  } catch {}

  return null;
};

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
};

const AppContext = createContext<AppContextType>({
  moodList: [],
  handleSelectMood: () => {},
});

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const data = await getAppData();
      if (data) {
        setMoodList(data.moodList);
      }
    };

    fetchAppData();
  });

  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList(current => {
      const newMoodList = [
        ...current,
        { mood: selectedMood, timestamp: Date.now() },
      ];

      setAppData({ moodList: newMoodList });

      return newMoodList;
    });
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
