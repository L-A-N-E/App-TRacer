// Importando dependencias
import React from 'react';
import {  Text, TouchableOpacity } from 'react-native';
// Importando dados
import sampleFormulaERacesData from '../../constant/racesData';
import { HomeUpRaceContainer, HomeUpRaceImage, HomeUpRaces, HomeUpRaceText, HomeUpRaceTextContainer, HomeUpText, HomeUpTextContainer, HomeUpViewMoreText } from '../../styles/HomeStyles';

const NextRaceSection = ({ navigation }) => {
  // Obtenha o primeiro item da lista de corridas futuras
  const upcomingRaces = sampleFormulaERacesData.upcoming;
  const nextRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;

  return (
    <HomeUpRaces>
      <HomeUpTextContainer>
        <HomeUpText>Upcoming Races</HomeUpText>
        <TouchableOpacity onPress={() => navigation.navigate('Races')}>
          <HomeUpText>See All</HomeUpText>
        </TouchableOpacity>
      </HomeUpTextContainer>
      {nextRace ? (
        <HomeUpRaceContainer>
          <HomeUpRaceTextContainer>
            <HomeUpRaceImage resizeMode={'contain'} source={nextRace.imageSource}/>
            <HomeUpRaceText>{nextRace.date}</HomeUpRaceText>
            <HomeUpRaceText>{nextRace.circuit}</HomeUpRaceText>
          </HomeUpRaceTextContainer>
          <HomeUpViewMoreText>View More</HomeUpViewMoreText >
        </HomeUpRaceContainer>
      ) : (
        <Text>No upcoming race data available.</Text>
      )}
    </HomeUpRaces>
  );
};

export default NextRaceSection;
