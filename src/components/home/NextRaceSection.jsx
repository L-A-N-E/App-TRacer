// Importando dependencias
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
// Importando dados
import sampleFormulaERacesData from '../../constant/racesData';

const NextRaceSection = ({ navigation }) => {
  // Obtenha o primeiro item da lista de corridas futuras
  const upcomingRaces = sampleFormulaERacesData.upcoming;
  const nextRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Next Race</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Races')}>
        <Text>See All</Text>
      </TouchableOpacity>
      {nextRace ? (
        <View>
          <Text>{nextRace.date} - {nextRace.circuit}</Text>
          <ImageBackground
            source={nextRace.imageSource}
            style={styles.raceImage}
          />
        </View>
      ) : (
        <Text>No upcoming race data available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  raceImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default NextRaceSection;
