// Importando dependencias
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from '@expo/vector-icons/AntDesign';
// Importando as telas do aplicativo
import TRacerScreen from '../screens/TRacer/TRacerScreen'; 
import PilotSelectionScreen from '../screens/TRacer/PilotSelectionScreen'; 
import PilotDetailScreen from '../screens/TRacer/PilotsDetailsScreen';
// Importando cores definidas em um arquivo de constantes
import Colors from '../constant/Colors';
import PilotGraphicsScreen from '../screens/TRacer/PilotGraphicsScreen';
import RPHistory from '../screens/TRacer/RPHistory';
// Importa o hook para acessar as cores
import { useColors } from '../context/ColorsContext'; 

// Criando um objeto Stack para navegação
const Stack = createStackNavigator();

const AppNavigator = () => {

  // Custom hook para usar as cores no styled-components
  const useThemeColors = () => {
    const colors = useColors();
    return colors;
  };

  return(
    <Stack.Navigator 
      initialRouteName="TRacer" // Definindo a tela inicial do navegador
      screenOptions={{
        headerStyle: {
          backgroundColor: useThemeColors().red_color, 
          height: 100, 
        },
        headerTintColor: useThemeColors().ft_color, 
        headerTitleStyle: {
          fontFamily: 'Montserrat-ExtraBold', 
          fontSize: 20, 
        },
        headerTitleAlign: 'center', 
      }}>
      <Stack.Screen 
        name="TRacer" // Nome da tela
        component={TRacerScreen} // Componente que será renderizado
        options={{ title: 'TRACER' }} // Título a ser exibido no cabeçalho
      />
      <Stack.Screen 
        name="PilotSelection" // Nome da tela
        component={PilotSelectionScreen} // Componente que será renderizado
        options={({ navigation }) => ({
          title: 'PILOTS', // Título da tela
          headerLeft: () => ( // Personalizando o botão de voltar
            <AntDesign 
              name="left" 
              size={24} 
              color={Colors.ft_color} 
              onPress={() => navigation.goBack()} 
              style={{ marginLeft: 10 }} 
            />
          ),
        })} 
      />
      <Stack.Screen 
        name="PilotDetail" // Nome da tela
        component={PilotDetailScreen} // Componente que será renderizado
        options={({ navigation }) => ({
          title: 'DETAILS', // Título da tela
          headerLeft: () => ( // Personalizando o botão de voltar
            <AntDesign 
              name="left" 
              size={24} 
              color={Colors.ft_color} 
              onPress={() => navigation.goBack()} 
              style={{ marginLeft: 10 }} 
            />
          ),
        })} 
      />
      <Stack.Screen 
        name="Graphics" // Nome da tela
        component={PilotGraphicsScreen} // Componente que será renderizado
        options={({ navigation }) => ({
          title: 'GRAPHICS', // Título da tela
          headerLeft: () => ( // Personalizando o botão de voltar
            <AntDesign 
              name="left" 
              size={24} 
              color={Colors.ft_color} 
              onPress={() => navigation.goBack()} 
              style={{ marginLeft: 10 }} 
            />
          ),
        })} 
      />
      <Stack.Screen 
        name="RPHistory" // Nome da tela
        component={RPHistory} // Componente que será renderizado
        options={({ navigation }) => ({
          title: 'RP History', // Título da tela
          headerLeft: () => ( // Personalizando o botão de voltar
            <AntDesign 
              name="left" 
              size={24} 
              color={Colors.ft_color} 
              onPress={() => navigation.goBack()} 
              style={{ marginLeft: 10 }} 
            />
          ),
        })} 
      />
    </Stack.Navigator>
)};

export default AppNavigator;
