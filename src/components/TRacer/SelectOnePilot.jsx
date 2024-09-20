import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SelectOnePilot = ({ navigateToPilotSelection, navigateToPilotDetail, pilots}) => {
  return (
    <View>
        <Text>Select Your Pilot</Text>
        {pilots.map((pilot, index) => (
            <View key={index}>
                <Text>{pilot.name} - Points: {pilot.points}</Text>
                <TouchableOpacity onPress={() => navigateToPilotDetail(pilot)}>
                    <Text>See Details</Text>
                </TouchableOpacity>
            </View>
            ))}
        <TouchableOpacity onPress={navigateToPilotSelection}>
            <Text>Add Pilot</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SelectOnePilot