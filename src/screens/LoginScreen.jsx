import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Inputs from '../components/Inputs';

const LoginScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, navigation }) => {

  const onLoginPress = () => {
    handleAuthentication(email, password, isLogin, null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login NOW</Text>
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
      <TouchableOpacity onPress={onLoginPress}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.link}>
        <Text style={styles.linkText}>Need an Account? SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  link: {
    marginTop: 16,
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default LoginScreen;
