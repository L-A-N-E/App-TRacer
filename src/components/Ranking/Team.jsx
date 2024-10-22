import { View, Text, Image } from 'react-native'
import React from 'react'

const Team = ({ item, index }) => {
  return (
    <View>
    <Text>{index + 1}</Text>
    <View>
      <Text>{item.team}</Text>
      <Text>Points: {item.total_points}</Text>
    </View>
    <Image source={item.imageSource} />
  </View>
  )
}

export default Team
