// Importando dependencias
import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome Page!</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('LoginScreen')}
      />
      <Button
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

export default WelcomeScreen