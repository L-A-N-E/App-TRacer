import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SelectTwoPilot = ({navigateToPilotSelection}) => {
  return (
    <View>
        <Text>Select Your Pilots</Text>
        <TouchableOpacity onPress={navigateToPilotSelection}>
            <Text>Add Pilot</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToPilotSelection}>
            <Text>Add Pilot</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SelectTwoPilot