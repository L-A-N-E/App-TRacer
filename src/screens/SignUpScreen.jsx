import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
// Importando a função
import { handleSignUp } from '../utils/authUtils';
import AuthInputs from '../components/AuthInputs';

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
    <View>
      <AuthInputs
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        isPassword={false}
      />
      <AuthInputs
        value={email}
        onChangeText={setEmail}
        placeholder="Email Andress"
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
      <TouchableOpacity onPress={onSignUp}>
        <Text>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUpScreen
