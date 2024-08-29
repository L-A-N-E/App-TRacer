// Importando dependencias
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
// Importando as telas
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthNavigation from './AuthNavigation';
import SignUpScreen from '../screens/SignUpScreen';
// Chamando a configuração do banco de dados
import { auth } from '../firebase/firebaseConfig';
// Chamando a função
import { handleAuthentication } from '../utils/authUtils';

const Stack = createStackNavigator();

const WelcomeNavigation = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const onAuthenticate = async () => {
    try {
      await handleAuthentication(email, password, isLogin, user);
    } catch (error) {
      Alert.alert('Erro de autenticação', error.message);
    }
  };

  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen">
        {props => (
          <AuthNavigation
            {...props}
            user={user}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleAuthentication={onAuthenticate}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default WelcomeNavigation
