// Importando dependencias
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Importando ícones
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// Importando Telas
import HomeScreen from '../screens/HomeScreen';
import RacesScreen from '../screens/RacesScreen'; 
import ProfileScreen from '../screens/ProfileScreen'; 
import TRacerNavigation from './TRacerNavigation';
import RankingRace from '../screens/RankingRace';
// Importando estilos
import { NavigationTabIcon } from '../styles/NavigationStyles';
// Importando função
import { verifyPlataform } from '../utils/plataformUtils';
// Importa o hook para acessar as cores
import { useColors } from '../context/ColorsContext'; 

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // Custom hook para usar as cores no styled-components
  const useThemeColors = () => {
    const colors = useColors();
    return colors;
  };

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
          } else if (route.name === 'Ranking') {
            iconName = 'trophy'; 
          } else if (route.name === 'TRacerNav') {
            iconName = 'racing-helmet'; 
          }

          return (
            <NavigationTabIcon size={size} color={color}>
              <MaterialCommunityIcons name={iconName} size={iconName != 'racing-helmet' ? size : size + 12} color={color} />
            </NavigationTabIcon>
          );
        },
        tabBarActiveTintColor: useThemeColors().red_color,
        tabBarInactiveTintColor: useThemeColors().fill_color2,
        tabBarStyle: {
          backgroundColor: '#EDEDED',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 10,
          height: 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          display: 'none'
        },
        tabBarStyle: { height: verifyPlataform() ? 60 :  100 },
        headerShown: false,
        headerStyle: {
          backgroundColor: useThemeColors().red_color, 
          height: 100, 
        },
        headerTintColor: useThemeColors().ft_color, 
        headerTitleStyle: {
          fontFamily: 'Montserrat-ExtraBold', 
          textTransform: 'uppercase',
          fontSize: 20, 
        },
        headerTitleAlign: 'center', 
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ranking" component={RankingRace} options={{ headerShown: true,}}/>
      <Tab.Screen name="TRacerNav" component={TRacerNavigation} />
      <Tab.Screen name="Races" component={RacesScreen} options={{ headerShown: true,}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true,}}/>
    </Tab.Navigator>
  );
};

export default AppNavigator;
