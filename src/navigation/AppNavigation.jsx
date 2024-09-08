import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importando ícones
// Importando Telas
import HomeScreen from '../screens/HomeScreen';
import RacesScreen from '../screens/RacesScreen'; 
import ProfileScreen from '../screens/ProfileScreen'; 
// Importando estilos
import { NavigationTabIcon } from '../styles/NavigationStyles';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Define o nome do ícone com base na tela
          if (route.name === 'Home') {
            iconName = 'home'; 
          } else if (route.name === 'Races') {
            iconName = 'flag-checkered'; 
          } else if (route.name === 'Profile') {
            iconName = 'account'; 
          }

          return (
            <NavigationTabIcon size={size} color={color}>
              <MaterialCommunityIcons name={iconName} size={size} color={color} />
            </NavigationTabIcon>
          );
        },
        tabBarActiveTintColor: '#D9072D',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          backgroundColor: '#EDEDED',
        },
        tabBarLabelStyle: {
          display: 'none'
        },
        headerShown: false
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Races" component={RacesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
