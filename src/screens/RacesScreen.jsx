// Importando dependencias
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
// Importando os dados
import sampleFormulaERacesData from '../constant/racesData.jsx'; 
// Importando estilo
import { RacesContainer, RacesTabContainer, RacesTab, RacesTabText, RacesSafeView } from '../styles/RacesStyles';
// Importando componente
import Races from '../components/Races/Races.jsx';

const RacesScreen = () => {
  const [currentTab, setCurrentTab] = useState('upcoming');
  const [races, setRaces] = useState([]);

  useEffect(() => {
    // Atualize as corridas quando a aba atual mudar
    setRaces(sampleFormulaERacesData[currentTab]);

  }, [currentTab]);

  return (  
    <RacesSafeView>
      <RacesContainer>
        <RacesTabContainer>
          <RacesTab
            isActive={currentTab === 'upcoming'}
            onPress={() => setCurrentTab('upcoming')}
          >
            <RacesTabText>Upcoming</RacesTabText>
          </RacesTab>
          <RacesTab
            isActive={currentTab === 'past'}
            onPress={() => setCurrentTab('past')}
          >
            <RacesTabText>Past</RacesTabText>
          </RacesTab>
        </RacesTabContainer>
        <FlatList
          data={races}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> <Races item={item}/>}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20
          }}
        />
    </RacesContainer>
    </RacesSafeView>
  );
};

export default RacesScreen;
