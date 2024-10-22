import { View, Text } from 'react-native'
import React from 'react'

const Team = ({ item, index }) => {
  return (
    <View>
    <Text>{index + 1}</Text>
    <Text>{item.team}</Text>
    <Text>{item.total_points}</Text>
  </View>
  )
}

export default Team
