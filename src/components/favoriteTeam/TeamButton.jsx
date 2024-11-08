// Importando dependencias
import React from 'react';
// Importando estilos
import { TeamButtons, TeamLogo, TeamName } from '../../styles/HomeStyles';

const TeamButton = ({ team, onSelect }) => {
  return (
    <TeamButtons onPress={() => onSelect(team)}>
      <TeamLogo source={team.imageSource} />
      <TeamName>{team.team}</TeamName>
    </TeamButtons>
  );
};

export default TeamButton;
