// Importando dependencias
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
// Importando estilos
import { SectionAdd, SectionButton, SectionButtonText, SectionContent, SectionContentContainer, SectionSelect, SectionTextBold, SectionTitle, TotalText, TotalTextBold } from '../../styles/TRacerStyles'
import { PilotButtonContainer, PilotText, PilotBold, PilotImage } from '../../styles/PilotsStyles'

const SelectOnePilot = ({ navigateToPilotSelection, navigateToPilotDetail, pilots, totalPoints, deletePilot}) => {
  return (
    <SectionSelect>
        <SectionTitle >Select Your Pilot</SectionTitle>
        {pilots.map((pilot, index) => (
            <SectionContent key={index}>
                <PilotImage source={pilot.imagePilot} />
                <SectionContentContainer>
                    <SectionTextBold>{pilot.name}</SectionTextBold>
                    <PilotButtonContainer>
                        <PilotText>RP <PilotBold>{pilot.points}</PilotBold></PilotText>
                        <SectionButton onPress={() => navigateToPilotDetail(pilot)}>
                            <SectionButtonText>Details</SectionButtonText>
                        </SectionButton>
                        <SectionButton onPress={() => deletePilot(index)}> 
                            <SectionButtonText>Delete</SectionButtonText>
                        </SectionButton>
                    </PilotButtonContainer>
                </SectionContentContainer>
            </SectionContent>
            ))}
        <SectionAdd onPress={navigateToPilotSelection}>
            <AntDesign 
                name="pluscircleo" 
                size={24} 
                color="white" 
            />
        </SectionAdd>
        <View>
            <TotalText>Total RP: <TotalTextBold>{totalPoints}</TotalTextBold></TotalText>
        </View>
    </SectionSelect>
  )
}

export default SelectOnePilot