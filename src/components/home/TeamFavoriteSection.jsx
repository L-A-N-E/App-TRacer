// Importando dependencias
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
// Importando dados
import sampleFormulaETeamsData from '../../constant/teamsData.jsx'; 

const TeamPointsSection = ({ teamName }) => {
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
    <View>
      <Text>Team Points</Text>
      {loading ? (
        <Text>Loading team points...</Text>
      ) : teamPoints ? (
        <View>
          <FlatList
            data={teamPoints.drivers}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Text>{item.name}: {item.points_last_season} points</Text>
            )}
          />
          <Text>Total Point's: {teamPoints.total_points}</Text>
        </View>
      ) : (
        <Text>No team points data available.</Text>
      )}
    </View>
  );
};

export default TeamPointsSection;
