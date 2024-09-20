import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SelectedPilots = ({ navigateToPilotDetail, pilots}) => {
  return (
    <View>
        <Text>Your Pilots</Text>
        {pilots.map((pilot, index) => (
            <View key={index} >
                <Text>{pilot.name} - Points: {pilot.points}</Text>
                <TouchableOpacity onPress={() => navigateToPilotDetail(pilot)}>
                    <Text>See Details</Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
  )
}

export default SelectedPilots