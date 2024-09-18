import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Importando telas
import TRacerScreen from '../screens/TRacerScreen'; 
import PilotSelectionScreen from '../screens/PilotSelectionScreen'; 

const Stack = createStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator initialRouteName="TRacer">
      <Stack.Screen name="TRacer" component={TRacerScreen} />
      <Stack.Screen name="PilotSelection" component={PilotSelectionScreen} />
    </Stack.Navigator>
);

export default AppNavigator;
