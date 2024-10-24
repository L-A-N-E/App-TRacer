import { FlatList } from 'react-native'
import React from 'react'
import sampleFormulaETeamsData from '../../constant/teamsData'
import TeamButton from './TeamButton'
import { TeamSelectGradient, TeamText } from '../../styles/HomeStyles'

export default function TeamSelect({ handleFavoriteTeamSelection }) {
  return (
    <TeamSelectGradient>
    <TeamText>Select your favorite team</TeamText>
    <FlatList
      data={sampleFormulaETeamsData.teams}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TeamButton
          team={item}
          onSelect={handleFavoriteTeamSelection}
        />
      )}
      contentContainerStyle={{
        justifyContent: 'center',
        gap: 20
      }}
      showsVerticalScrollIndicator={false}
    />
  </TeamSelectGradient>
  )
}