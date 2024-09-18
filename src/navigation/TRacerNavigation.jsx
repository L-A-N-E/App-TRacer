import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Importando telas
import TRacerScreen from '../screens/TRacerScreen'; 
import PilotSelectionScreen from '../screens/PilotSelectionScreen'; 
import PilotDetailScreen from '../screens/PilotsDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator initialRouteName="TRacer">
      <Stack.Screen name="TRacer" component={TRacerScreen} />
      <Stack.Screen name="PilotSelection" component={PilotSelectionScreen} />
      <Stack.Screen name="PilotDetail" component={PilotDetailScreen} />
    </Stack.Navigator>
);

export default AppNavigator;
