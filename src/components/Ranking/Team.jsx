import { View, Text, Image } from 'react-native'
import React from 'react'
import { RankingGradient, RankingImage, RankingPoints, RankingPointsBold, RankingPos, RankingText, RankingTextView } from '../../styles/RankingStyles'

const Team = ({ item, index }) => {
  return (
    <RankingGradient>
    <RankingPos>{index + 1}°</RankingPos>
    <RankingTextView>
      <RankingText>{item.team}</RankingText>
      <RankingPoints>Points: <RankingPointsBold>{item.total_points}</RankingPointsBold></RankingPoints>
    </RankingTextView>
    <RankingImage source={item.imageSource} resizeMode="contain" />
  </RankingGradient>
  )
}

export default Team
