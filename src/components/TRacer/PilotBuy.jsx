// Importando dependencias
import React from 'react'
// Importando estilos
import { PilotButton, PilotBuyContainer, PilotButtonText, PilotContent, PilotCust, PilotBold, PilotImage, PilotName, PilotPoints, PilotPointsContainer, PilotPointsText, PilotPointsTitle, PilotsContainer } from '../../styles/PilotsStyles'

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
            <PilotBuyContainer>
                <PilotCust>TR$ <PilotBold>{pilot.cust_tr}</PilotBold></PilotCust>
                <PilotButton onPress={() => handleConfirmPilotSelection(pilot)}>
                    <PilotButtonText>Buy</PilotButtonText>
                </PilotButton>
            </PilotBuyContainer>
        </PilotContent>
    </PilotsContainer>
  )
}

export default PilotBuy