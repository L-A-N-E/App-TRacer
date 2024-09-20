import React, { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native';
// Importando dados
import sampleFormulaETeamsData from '../../constant/teamsData.jsx'; 
// Importando Estilos
import { HomePilotsText, HomeUpRaceContainer, HomeUpTextContainer, HomeUpText, HomeUpRaces, HomeTeamTextContainer, HomeTeam } from '../../styles/HomeStyles.jsx';

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
      </HomeUpTextContainer>
      {loading ? (
        <Text>Loading team points...</Text>
      ) : teamPoints.length > 0 ? (
        <HomeUpRaceContainer>
          <FlatList
            data={teamPoints}
            keyExtractor={item => item.team}
            renderItem={({ item }) => (
              <HomeTeam>
                <HomeTeamTextContainer>
                    <HomePilotsText>{item.team}</HomePilotsText>
                    <HomePilotsText>Total Points: {item.total_points}</HomePilotsText>
                </HomeTeamTextContainer>
              </HomeTeam>
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
