// Importando dependencias
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Importando navigation
import WelcomeNavigation from './navigation/WelcomeNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeNavigation />
    </NavigationContainer>
  );
}
