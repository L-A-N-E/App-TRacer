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

const PilotSelectionScreen = ({ navigation, route }) => {
  // Desestrutura os parâmetros da rota
  const { TRpoints, setTRPoints, pilots, setPilots, user } = route.params;
  // Inicializa o estado com as equipes disponíveis
  const [availableTeams] = useState(sampleFormulaETeamsData.teams);

  // Função para selecionar um piloto
  const handleSelectPilot = async (pilot) => {
    // Verifica se o usuário tem pontos suficientes e se ainda não selecionou dois pilotos
    if (TRpoints >= pilot.cust_tr && pilots.length < 2) {
      // Atualiza a lista de pilotos selecionados
      const updatedPilots = [...pilots, { name: pilot.name, points: pilot.current_RacesPoints }];
      const userRef = doc(db, 'users', user.uid); // Referência ao documento do usuário no Firestore

      try {
        // Atualiza o documento do usuário com os pilotos selecionados e os pontos restantes
        await updateDoc(userRef, {
          selectedPilots: updatedPilots,
          tr_points: TRpoints - pilot.cust_tr
        });
        setPilots(updatedPilots); // Atualiza o estado com os pilotos selecionados
        setTRPoints(TRpoints - pilot.cust_tr); // Atualiza os pontos restantes
        navigation.goBack(); // Volta para a tela anterior
      } catch (error) {
        console.error('Error updating document: ', error); // Log de erro caso a atualização falhe
      }
    } else {
      alert('Not enough points or already selected two pilots.'); // Mensagem de alerta se não puder selecionar
    }
  };

  // Função para confirmar a seleção de um piloto
  const handleConfirmPilotSelection = (pilot) => {
    const { title, message, buttons } = confirmPilotSelection(pilot, handleSelectPilot); // Prepara a mensagem de confirmação
    Alert.alert(title, message, buttons); // Mostra o alerta de confirmação
  };

  // Função para renderizar cada item piloto
  const renderPilotItem = ({ item: pilot }) => {
    return (
      <View>
        <Text>{pilot.name} - Cost: {pilot.cust_tr} Points</Text>
        <Button title="Buy" onPress={() => handleConfirmPilotSelection(pilot)} />
      </View>
    );
  };

  // Função para renderizar a lista principal
  return (
    <View>
      <View>
        <Text>TOTAL: </Text>
        <Text>TR$ {TRpoints}</Text>
      </View>
      <FlatList
        data={availableTeams.flatMap(team => getAvailablePilots(team.drivers, pilots))} // Filtra todos os pilotos disponíveis
        keyExtractor={pilot => pilot.name} // Extrai chave única de cada piloto
        renderItem={renderPilotItem} // Renderiza cada piloto
      />
    </View>
  );
};

export default PilotSelectionScreen; 
