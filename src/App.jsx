// Importando dependências
import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// Importando nav
import WelcomeNavigation from './navigation/WelcomeNavigation';
import LoadingScreen from './screens/LoadingScreen';

// Componente principal do aplicativo
const App = () => {
  // Carregar fontes 
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
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
