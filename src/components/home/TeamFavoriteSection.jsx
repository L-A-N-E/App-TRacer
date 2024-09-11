// Importando dependências
import React, { useEffect, useState } from 'react';
import { Text, FlatList, TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native';
// Importando dados
import sampleFormulaETeamsData from '../../constant/teamsData.jsx'; 
// Importando Estilos
import { HomePilots, HomePilotsText, HomeUpRaceContainer, HomeUpRaces, HomeUpText, HomeUpTextContainer, HomeUpViewMoreText } from '../../styles/HomeStyles.jsx';

// Obter largura da tela
const { width } = Dimensions.get('window');

const TeamPointsSection = ({ teamName, navigation }) => {
  const [teamPoints, setTeamPoints] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTeamPoints = () => {
      const team = sampleFormulaETeamsData.teams.find(team => team.team === teamName);
      if (team) {
        setTeamPoints(team);
      }
      setLoading(false);
    };

    if (teamName) {
      getTeamPoints();
    }
  }, [teamName]);

  return (
    <HomeUpRaces>
      <HomeUpTextContainer>
        <Text>Pilots</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Races')}>
          <HomeUpText>See All</HomeUpText>
        </TouchableOpacity>
      </HomeUpTextContainer>
      {loading ? (
        <Text>Loading team points...</Text>
      ) : teamPoints ? (
        <HomeUpRaceContainer>
          <FlatList
            data={teamPoints.drivers}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <HomePilots> 
                <HomePilotsText>{item.name}: {item.points_last_season} points</HomePilotsText>
                <HomeUpViewMoreText>View More</HomeUpViewMoreText>
              </HomePilots>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            getItemLayout={(data, index) => ({
              length: width, 
              offset: width * index, 
              index,
            })}
          />
        </HomeUpRaceContainer>
      ) : (
        <Text>No team points data available.</Text>
      )}
    </HomeUpRaces>
  );
};

export default TeamPointsSection;
