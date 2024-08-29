import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AuthInputs from '../components/AuthInputs';

const LoginScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, navigation }) => {

  const onLoginPress = () => {
    handleAuthentication(email, password, isLogin, null);
  };

  return (
    <View>
      <Text>Login NOW</Text>
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
      <TouchableOpacity onPress={onLoginPress}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text>Need an Account? SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
