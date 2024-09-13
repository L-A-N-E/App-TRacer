import React, { useEffect, useState } from 'react';
import { Text, FlatList, TouchableOpacity, View } from 'react-native';
// Importando dados
import sampleFormulaETeamsData from '../../constant/teamsData.jsx'; 
// Importando Estilos
import { HomePilots, HomePilotsText, HomeUpRaceContainer, HomeUpTextContainer, HomeUpText, HomeUpViewMoreText, HomeUpRaces } from '../../styles/HomeStyles.jsx';

const TeamPointsSection = ({ teamName, navigation }) => {
  const [teamPoints, setTeamPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTeamPoints = () => {
      const team = sampleFormulaETeamsData.teams.find(team => team.team === teamName);
      if (team) {
        setTeamPoints([team]); 
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
        <HomeUpText>Team</HomeUpText>
        <TouchableOpacity onPress={() => navigation.navigate('Races')}>
          <HomeUpText>See All</HomeUpText>
        </TouchableOpacity>
      </HomeUpTextContainer>
      {loading ? (
        <Text>Loading team points...</Text>
      ) : teamPoints.length > 0 ? (
        <HomeUpRaceContainer>
          <FlatList
            data={teamPoints}
            keyExtractor={item => item.team}
            renderItem={({ item }) => (
              <HomePilots>
                <View>
                    <HomePilotsText>{item.team}</HomePilotsText>
                    <HomePilotsText>Total Points: {item.total_points}</HomePilotsText>
                </View>
                <HomeUpViewMoreText>View More</HomeUpViewMoreText>
              </HomePilots>
            )}
          />
        </HomeUpRaceContainer>
      ) : (
        <Text>No team points data available.</Text>
      )}
    </HomeUpRaces>
  );
};

export default TeamPointsSection;
