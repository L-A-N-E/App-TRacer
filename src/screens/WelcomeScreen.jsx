// Importando dependencias
import React from 'react';
// Importando os Estilos
import { AuthBackground, AuthButton, AuthButtonText, AuthView, AuthTitle } from '../styles/AuthStyles'

const WelcomeScreen = ({ navigation }) => {
  return (
    <AuthBackground source={require('../assets/images/background/background.png')}>
      <AuthView>
        <AuthTitle>Wellcome!</AuthTitle>
        <AuthButton onPress={() => navigation.navigate('LoginScreen')}>
          <AuthButtonText>Login</AuthButtonText>
        </AuthButton>
        <AuthButton onPress={() => navigation.navigate('SignUp')} >
          <AuthButtonText>Sign Up</AuthButtonText>
        </AuthButton>
      </AuthView>
    </AuthBackground>
  );
}

export default WelcomeScreen