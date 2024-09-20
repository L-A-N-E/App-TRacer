// Importando dependencias
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
// Importando estilos
import { SectionAdd, SectionSelect, SectionTitle } from '../../styles/TRacerStyles'


const SelectTwoPilot = ({navigateToPilotSelection}) => {
  return (
    <SectionSelect>
      <SectionTitle>Select Your Pilots</SectionTitle>
        <SectionAdd onPress={navigateToPilotSelection}>
            <AntDesign 
                name="pluscircleo" 
                size={24} 
                color="white" 
            />
        </SectionAdd>
        <SectionAdd onPress={navigateToPilotSelection}>
            <AntDesign 
                name="pluscircleo" 
                size={24} 
                color="white" 
            />
        </SectionAdd>
    </SectionSelect>
  )
}

export default SelectTwoPilot