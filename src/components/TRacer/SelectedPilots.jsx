// Importando dependências
import React from 'react'
// Importando estilos
import { SectionButton, SectionButtonText, SectionContent, SectionContentContainer, SectionSelect, SectionTextBold, SectionTitle, TotalText, TotalTextBold } from '../../styles/TRacerStyles'
import { PilotButtonContainer, PilotText, PilotBold, PilotImage } from '../../styles/PilotsStyles'

const SelectedPilots = ({ navigateToPilotDetail, pilots, totalPoints, deletePilot }) => {
  return (
    <SectionSelect>
        <SectionTitle>Your Pilots</SectionTitle>
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
        <TotalText>Total RP: <TotalTextBold>{totalPoints}</TotalTextBold></TotalText>
    </SectionSelect>
  )
}

export default SelectedPilots;
