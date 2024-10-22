import { View, Text } from 'react-native'
import React from 'react'

const Driver = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>Pontos: {item.points_last_season}</Text>
      <Text>Ranking: {item.final_ranking}</Text>
      <Text>Time: {item.team}</Text>
    </View>
  )
}

export default Driver
