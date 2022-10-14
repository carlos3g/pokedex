import { FC } from 'react';

import { Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';

import { Home } from '@screens';

void NavigationBar.setPositionAsync('absolute');
void NavigationBar.setBehaviorAsync('inset-swipe');
void NavigationBar.setBackgroundColorAsync('#ffffff80');

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar translucent />
      <Home />
    </>
  );
};

export default App;
