import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// Importando os dados
import sampleFormulaERacesData from '../constant/racesData.jsx'; 
import { RacesContainer, RacesTabContainer, RacesTab, RacesTabText, RaceItem, RaceDate,  RaceContent, RaceLocation, RaceSeason } from '../styles/RacesStyles';

const RacesScreen = () => {
  const [currentTab, setCurrentTab] = useState('upcoming');
  const [races, setRaces] = useState([]);

  useEffect(() => {

    setRaces(sampleFormulaERacesData[currentTab]);

  }, [currentTab]);

  return (
    <RacesContainer>
      <RacesTabContainer>
        <RacesTab
          isActive={currentTab === 'upcoming'}
          onPress={() => setCurrentTab('upcoming')}
        >
          <RacesTabText>Upcoming E-Prix</RacesTabText>
        </RacesTab>
        <RacesTab
          isActive={currentTab === 'past'}
          onPress={() => setCurrentTab('past')}
        >
          <RacesTabText>Past E-Prix</RacesTabText>
        </RacesTab>
      </RacesTabContainer>
      <FlatList
        data={races}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RaceItem>
            <RaceDate>{item.countryCode}</RaceDate>
            <RaceContent>{item.circuit}</RaceContent>
            <RaceContent>{item.date}</RaceContent>
          </RaceItem>
        )}
        contentContainerStyle={{ marginTop: 16 }}
      />
    </RacesContainer>
  );
};

export default RacesScreen;
