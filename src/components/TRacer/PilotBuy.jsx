// Importando dependencias
import React from 'react'
// Importando estilos
import { PilotButton, PilotButtonContainer, PilotButtonText, PilotContent, PilotText, PilotBold, PilotImage, PilotName, PilotPoints, PilotPointsContainer, PilotPointsText, PilotPointsTitle, PilotsContainer } from '../../styles/PilotsStyles'

const PilotBuy = ({pilot, handleConfirmPilotSelection}) => {
  return (
    <PilotsContainer>
        <PilotImage source={pilot.imagePilot} />
        <PilotContent>
            <PilotName>{pilot.name}</PilotName>
            <PilotPoints>
                <PilotPointsContainer>
                    <PilotPointsText>{pilot.lastRacePoints}</PilotPointsText>
                    <PilotPointsTitle>Last</PilotPointsTitle>
                </PilotPointsContainer>
                <PilotPointsContainer>
                    <PilotPointsText>{pilot.racesPoints_average}</PilotPointsText>
                    <PilotPointsTitle>Average</PilotPointsTitle>
                </PilotPointsContainer>
                <PilotPointsContainer>
                    <PilotPointsText>{pilot.races}</PilotPointsText>
                    <PilotPointsTitle>Races</PilotPointsTitle>
                </PilotPointsContainer>
            </PilotPoints>
            <PilotButtonContainer>
                <PilotText>TR$ <PilotBold>{pilot.cust_tr}</PilotBold></PilotText>
                <PilotButton onPress={() => handleConfirmPilotSelection(pilot)}>
                    <PilotButtonText>Buy</PilotButtonText>
                </PilotButton>
            </PilotButtonContainer>
        </PilotContent>
    </PilotsContainer>
  )
}

export default PilotBuy