import { View, Text } from 'react-native'
import React from 'react'

const Driver = ({ item }) => {
  return (
    <View>
      <Text>{item.final_ranking}</Text>
      <View>
        <Text>{item.name}</Text>
        <Text>Points: {item.points_last_season}</Text>
      </View>
    </View>
  )
}

export default Driver
