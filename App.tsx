import { FC } from 'react';

import { Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

import { Home } from '@screens';

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Home />;
};

export default App;
