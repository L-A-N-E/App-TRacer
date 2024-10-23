import { View, Text } from 'react-native'
import React from 'react'
import { RankingGradient, RankingImage, RankingPoints, RankingPointsBold, RankingPos, RankingText, RankingTextView } from '../../styles/RankingStyles'

const Driver = ({ item }) => {
  return (
    <RankingGradient>
      <RankingPos>{item.final_ranking}°</RankingPos>
      <RankingTextView>
        <RankingText>{item.name}</RankingText>
        <RankingPoints>Points: <RankingPointsBold>{item.points_last_season}</RankingPointsBold></RankingPoints>
      </RankingTextView>
      <RankingImage source={item.imagePilot} resizeMode="contain" />
    </RankingGradient>
  )
}

export default Driver
