import React from 'react';
import { TouchableOpacity } from 'react-native';
// Importando componente
import AuthInputs from '../../components/AuthInputs';
// Importando estilos
import { AuthBackground, AuthButton, AuthLinkText, AuthView, AuthTitle, AuthBold, AuthButtonText, AuthInputsView } from '../../styles/AuthStyles'

const LoginScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, navigation }) => {

  const onLoginPress = () => {
    handleAuthentication(email, password, isLogin, null);
  };

  return (
    <AuthBackground source={require('../../assets/images/background/background.png')}>
      <AuthView>
        <AuthTitle>Login <AuthBold>NOW</AuthBold></AuthTitle>
        <AuthInputsView>
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
        </AuthInputsView>
        <AuthButton onPress={onLoginPress}>
          <AuthButtonText>Login</AuthButtonText>
        </AuthButton>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <AuthLinkText>Need an Account? SignIn</AuthLinkText>
        </TouchableOpacity>
      </AuthView>
    </AuthBackground>
  );
};

export default LoginScreen;
