// Importando dependencias
import React, { useState } from 'react'; 
import { View, Text, FlatList, Alert, Button } from 'react-native'; 
import { doc, updateDoc } from 'firebase/firestore';
// Importando dados
import sampleFormulaETeamsData from '../../constant/teamsData.jsx'; 
// Importando db
import { db } from '../../firebase/firebaseConfig.jsx';  
// Importando funções
import { getAvailablePilots, confirmPilotSelection } from '../../utils/pilotUtils.js'; 
// Importando componentes
import PilotBuy from '../../components/TRacer/PilotBuy.jsx';
// Importando estilos
import { SelectionBold, SelectionContainer, SelectionContainerText, SelectionText } from '../../styles/PilotsStyles.jsx';

const PilotSelectionScreen = ({ navigation, route }) => {
  // Desestrutura os parâmetros da rota
  const { TRpoints, setTRPoints, pilots, setPilots, user } = route.params;
  // Inicializa o estado com as equipes disponíveis
  const [availableTeams] = useState(sampleFormulaETeamsData.teams);

  const handleSelectPilot = async (pilot) => {
    if (TRpoints >= pilot.cust_tr && pilots.length < 2) {
      // Cria a nova lista de pilotos selecionados
      const updatedPilots = [...pilots, { name: pilot.name, points: pilot.current_racesPoints, imagePilot: pilot.imagePilot }];
      const userRef = doc(db, 'users', user.uid);
  
      // Verifique a estrutura dos dados que você está atualizando
      const dataToUpdate = {
        selectedPilots: updatedPilots,
        tr_points: TRpoints - pilot.cust_tr,
      };
  
      try {
        await updateDoc(userRef, dataToUpdate);
        setPilots(updatedPilots);
        setTRPoints(TRpoints - pilot.cust_tr);
        navigation.goBack();
      } catch (error) {
        console.error('Error updating document: ', error);
      }
    } else {
      alert('Not enough points or already selected two pilots.');
    }
  };
  

  // Função para confirmar a seleção de um piloto
  const handleConfirmPilotSelection = (pilot) => {
    const { title, message, buttons } = confirmPilotSelection(pilot, handleSelectPilot); // Prepara a mensagem de confirmação
    Alert.alert(title, message, buttons); // Mostra o alerta de confirmação
  };

  // Função para renderizar cada item piloto
  const renderPilotItem = ({ item: pilot }) => {
    return <PilotBuy pilot={pilot} handleConfirmPilotSelection={handleConfirmPilotSelection}/>
  };

  // Função para renderizar a lista principal
  return (
    <SelectionContainer>
      <SelectionContainerText>
        <SelectionText>TOTAL</SelectionText>
        <SelectionText>TR$ <SelectionBold>{TRpoints}</SelectionBold></SelectionText>
      </SelectionContainerText>
      <FlatList
        data={availableTeams.flatMap(team => getAvailablePilots(team.drivers, pilots))} // Filtra todos os pilotos disponíveis
        keyExtractor={pilot => pilot.name} // Extrai chave única de cada piloto
        renderItem={renderPilotItem} // Renderiza cada piloto
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      />
    </SelectionContainer>
  );
};

export default PilotSelectionScreen; 
