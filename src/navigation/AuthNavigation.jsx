// Importando dependencias
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Importando telas
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import AppNavigator from './AppNavigation';

const Stack = createStackNavigator();

const AuthNavigation = ({ user, email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
    
    const handleSubmit = () => {
        handleAuthentication(email, password, isLogin, user);
    };
    
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <Stack.Screen name="App" component={AppNavigator}/>
      ) : (
        <Stack.Screen name="Login">
          {props => (
            <LoginScreen
              {...props}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              handleAuthentication={handleSubmit}
            />
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
