import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PilotDetailScreen = ({ route }) => {
  const { pilot } = route.params;

  return (
    <View>
      <Text>{pilot.name}</Text>
      <Text>Points: {pilot.points}</Text>
    </View>
  );
};


export default PilotDetailScreen;
