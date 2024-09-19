// Importando dependências
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// Importando nav
import WelcomeNavigation from './navigation/WelcomeNavigation';
import LoadingScreen from './screens/LoadingScreen';

// Componente principal do aplicativo
const App = () => {
  // Carregar fontes 
  const [fontsLoaded] = useFonts({
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Dragrace': require('./assets/fonts/Dragrace.ttf')
  });

  // Exibir indicador de carregamento enquanto a fonte estão sendo carregadas
  if (!fontsLoaded) {
    return <LoadingScreen />
  }

  return (
    <NavigationContainer>
      <WelcomeNavigation />
    </NavigationContainer>
  );
}

export default App
