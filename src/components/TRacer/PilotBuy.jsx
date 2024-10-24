// Importando dependências
import React, { useEffect, useState } from 'react';
// Importando estilos
import { PilotButton, PilotButtonContainer, PilotButtonText, PilotContent, PilotText, PilotBold, PilotImage, PilotName, PilotPoints, PilotPointsContainer, PilotPointsText, PilotPointsTitle, PilotsContainer } from '../../styles/PilotsStyles';
// Importando funções
import { findTeamByPilotName } from '../../utils/dataUtils';

const PilotBuy = ({ pilot, handleConfirmPilotSelection }) => {
    const [team, setTeam] = useState(null); // Inicializa como null

    useEffect(() => {
        const teamFound = findTeamByPilotName(pilot.name);
        console.log("Team found:", teamFound); // Verifique o retorno aqui
        setTeam(teamFound); // Atualiza o estado do time
    }, [pilot.name]);

    // Verifica se o team e red_color estão definidos. Usa uma cor padrão se red_color for indefinido.
    const teamColor = team?.['red_color'] || '#000';

    return (
        <PilotsContainer colors={teamColor}>
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
    );
};

export default PilotBuy;
