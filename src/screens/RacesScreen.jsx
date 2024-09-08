import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, View, Text } from 'react-native';
// Importando os dados
import sampleFormulaERacesData from '../constant/racesData.jsx'; 
import { RacesContainer, RacesTabContainer, RacesTab, RacesTabText, RaceItem, RaceDate, RaceContent } from '../styles/RacesStyles';

const RacesScreen = () => {
  const [currentTab, setCurrentTab] = useState('upcoming');
  const [races, setRaces] = useState([]);

  useEffect(() => {
    // Atualize as corridas quando a aba atual mudar
    setRaces(sampleFormulaERacesData[currentTab]);

  }, [currentTab]);

  

  const renderItem = ({ item }) => {
    const imageSource = item.imageSource;

    return (
      <ImageBackground source={imageSource}>
        <RaceItem>
          <RaceDate>{item.countryCode}</RaceDate>
          <RaceContent>{item.circuit}</RaceContent>
          <RaceContent>{item.date}</RaceContent>
        </RaceItem>
      </ImageBackground>
    );
  };

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
        renderItem={renderItem}
      />
    </RacesContainer>
  );
};

export default RacesScreen;
