// Importando dependencias
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { WelcomeTitle, WelcomeView } from '../styles/WelcomeStyles';
import { AuthBackground, AuthButton, AuthText } from '../styles/AuthStyles'

const WelcomeScreen = ({ navigation }) => {
  return (
    <AuthBackground source={require('../assets/images/background.png')}>
      <WelcomeView>
        <WelcomeTitle>Welcome!</WelcomeTitle>
        <AuthButton onPress={() => navigation.navigate('LoginScreen')}>
          <AuthText>Login</AuthText>
        </AuthButton>
        <AuthButton onPress={() => navigation.navigate('SignUp')} >
          <AuthText>Sign In</AuthText>
        </AuthButton>
      </WelcomeView>
    </AuthBackground>
  );
}

export default WelcomeScreen