// Importando dependencias
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
// Importando estilos
import { SectionAdd, SectionButton, SectionButtonText, SectionContent, SectionContentContainer, SectionSelect, SectionTextBold, SectionTitle, TotalText, TotalTextBold } from '../../styles/TRacerStyles'
import { PilotButtonContainer, PilotText, PilotBold, PilotImage } from '../../styles/PilotsStyles'
// Importando função
import { findTeamByPilotName } from '../../utils/dataUtils';

const SelectOnePilot = ({ navigateToPilotSelection, navigateToPilotDetail, pilots, totalPoints, deletePilot}) => {
  return (
    <SectionSelect>
        <SectionTitle >Select Your Pilot</SectionTitle>
        {pilots.map((pilot, index) => {
            const [team, setTeam] = useState(null); // Inicializa como null

            useEffect(() => {
                const teamFound = findTeamByPilotName(pilot.name);
                console.log("Team found:", teamFound); // Verifique o retorno aqui
                setTeam(teamFound); // Atualiza o estado do time
            }, [pilot.name]);
        
            // Verifica se o team e red_color estão definidos. Usa uma cor padrão se red_color for indefinido.
            const teamColor = team?.['red_color'] || '#000';

            return(
                <SectionContent key={index} colors={teamColor}>
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
            )
        })}
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