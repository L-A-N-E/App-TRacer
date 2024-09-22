// Importando dependencias
import React from 'react'
import { View, Text } from 'react-native'
// Importando estilos
import { RaceDate, RaceContent, RaceCountry, RaceFlag, RaceContainerView, RaceGradient } from '../../styles/RacesStyles';

const Races = ({item}) => {
  return (
    <RaceGradient>
        <RaceContainerView>
          <RaceCountry>{item.countryCode}</RaceCountry>
          <RaceDate>{item.date}</RaceDate>
          <RaceContent>{item.circuit}</RaceContent>
        </RaceContainerView>
        <View>
          <RaceFlag source={item.imageSource} />
        </View>
      </RaceGradient>
  )
}

export default Races