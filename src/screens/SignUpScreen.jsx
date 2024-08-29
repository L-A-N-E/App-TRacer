import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
// Importando a função
import { handleSignUp } from '../utils/authUtils';
import AuthInputs from '../components/AuthInputs';
// Importando Estilos
import { AuthBackground, AuthView, AuthButton, AuthLinkText, AuthTitle, AuthBold, AuthButtonText, AuthInputsView } from '../styles/AuthStyles'

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  const onSignUp = async () => {
    try {
      await handleSignUp(email, password, confirmPassword, username, navigation);
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <AuthBackground source={require('../assets/images/background.png')}>
      <AuthView>
      <AuthTitle>Create <AuthBold>NOW</AuthBold></AuthTitle>
        <AuthInputsView>
          <AuthInputs
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            isPassword={false}
          />
          <AuthInputs
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            isPassword={false}
          />
          <AuthInputs
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            isPassword={true}
          />
          <AuthInputs
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Repeat Password"
            isPassword={true}
          />
        </AuthInputsView>
        <AuthButton onPress={onSignUp}>
          <AuthButtonText>SIGN UP</AuthButtonText>
        </AuthButton>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <AuthLinkText>Já tem uma conta? Faça login</AuthLinkText>
        </TouchableOpacity>
      </AuthView>
    </AuthBackground>
  );
}

export default SignUpScreen
