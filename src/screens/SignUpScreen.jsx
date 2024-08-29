import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
// Importando a função
import { handleSignUp } from '../utils/authUtils';
import Inputs from '../components/Inputs';

export default function SignUpScreen({ navigation }) {
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
    <View style={styles.container}>
      <Inputs
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        isPassword={false}
      />
      <Inputs
        value={email}
        onChangeText={setEmail}
        placeholder="Email Andress"
        isPassword={false}
      />
      <Inputs
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        isPassword={true}
      />
      <Inputs
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Repeat Password"
        isPassword={true}
      />
      <TouchableOpacity onPress={onSignUp}>
        <Text>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.link}>
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  link: {
    marginTop: 16,
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
  },
});
