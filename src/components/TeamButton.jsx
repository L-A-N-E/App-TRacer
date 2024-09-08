import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const TeamButton = ({ team, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(team)}>
      <Image source={team.imageSource} />
      <Text>{team.team}</Text>
    </TouchableOpacity>
  );
};

export default TeamButton;
