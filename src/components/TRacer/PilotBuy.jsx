import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const PilotBuy = ({pilot}) => {
  return (
    <View>
        <Image source={pilot.imagePilot} />
        <View>
            <Text>{pilot.name}</Text>
            <View>
                <View>
                    <Text>{pilot.lastRacePoints}</Text>
                    <Text>Last</Text>
                </View>
                <View>
                    <Text>{pilot.racesPoints_average}</Text>
                    <Text>Average</Text>
                </View>
                <View>
                    <Text>{pilot.races}</Text>
                    <Text>Races</Text>
                </View>
            </View>
            <View>
                <Text>TR$ <Text>{pilot.cust_tr}</Text></Text>
                <TouchableOpacity onPress={() => handleConfirmPilotSelection(pilot)}>
                    <Text>Buy</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default PilotBuy