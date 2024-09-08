import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from '../firebase/firebaseConfig';
import { handleLogout } from '../utils/authUtils';
// Importando tela
import LoadingScreen from './LoadingScreen'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);

    return () => unsubscribe();
  }, []);

  if (user === null) {
    return <LoadingScreen />
  }

  return (
    <SafeAreaView>
      <Text>Bem-vindo, {user.displayName || 'Usuário'}!</Text>
      <Text>{user.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default HomeScreen;
