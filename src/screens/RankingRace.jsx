// Importando dependências
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
// Importando os dados
import sampleFormulaETeamsData from '../constant/teamsData.jsx'; 
// Importando componente
import Team from '../components/Ranking/Team.jsx'; 
import Driver from '../components/Ranking/Driver.jsx'; 
import { RankingTab, RankingTabContainer, RankingTabText } from '../styles/RankingStyles.jsx';

const RankingScreen = () => {
  const [currentTab, setCurrentTab] = useState('teams');
  const [teams, setTeams] = useState([]);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Obter os times e pilotos quando o componente for montado
    const { teams } = sampleFormulaETeamsData;
    setTeams(teams);
    setDrivers(teams.flatMap((team) => team.drivers));
  }, []);

  // Ordenar times por total de pontos
  const sortedTeams = [...teams].sort((a, b) => b.total_points - a.total_points);
  
  // Ordenar pilotos por pontos da última temporada
  const sortedDrivers = [...drivers].sort((a, b) => b.points_last_season - a.points_last_season);

  return (  
    <View>
      <View>
        <RankingTabContainer>
          <RankingTab
            isActive={currentTab === 'teams'}
            onPress={() => setCurrentTab('teams')}
          >
            <RankingTabText>Teams</RankingTabText>
          </RankingTab>
          <RankingTab
            isActive={currentTab === 'drivers'}
            onPress={() => setCurrentTab('drivers')}
          >
            <RankingTabText>Pilots</RankingTabText>
          </RankingTab>
        </RankingTabContainer>

        {currentTab === 'teams' ? (
          <FlatList
            data={sortedTeams}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => <Team item={item} index={index} />}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20
            }}
          />
        ) : (
          <FlatList
            data={sortedDrivers}
            keyExtractor={(item) => item.name} // Nome pode ser único
            renderItem={({ item }) => <Driver item={item} />}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20
            }}
          />
        )}
      </View>
    </View>
  );
};

export default RankingScreen;
