import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
// Importando os dados
import sampleFormulaERacesData from '../constant/racesData.jsx'; 
// Importando estilo
import { RacesContainer, RacesTabContainer, RacesTab, RacesTabText, RaceItem, RaceDate, RaceContent, RaceItemContainer, RaceCountry, RaceFlag, RaceContainerView, RaceGradient } from '../styles/RacesStyles';

const RacesScreen = () => {
  const [currentTab, setCurrentTab] = useState('upcoming');
  const [races, setRaces] = useState([]);

  useEffect(() => {
    // Atualize as corridas quando a aba atual mudar
    setRaces(sampleFormulaERacesData[currentTab]);

  }, [currentTab]);

  

  const renderItem = ({ item }) => {

    return (
      <RaceGradient>
        <RaceContainerView>
          <RaceCountry>{item.countryCode}</RaceCountry>
          <RaceDate>{item.date}</RaceDate>
          <RaceContent>{item.circuit}</RaceContent>
        </RaceContainerView>
        <View>
          <RaceFlag source={item.imageSource} />
        </View>
      </RaceGradient>
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
        contentContainerStyle={{ 
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10
        }}
      />
    </RacesContainer>
  );
};

const styles = StyleSheet.create({
  flags: {
    height: 100,
  }
})

export default RacesScreen;
