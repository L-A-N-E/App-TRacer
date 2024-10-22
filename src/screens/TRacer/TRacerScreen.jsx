// Importando dependências
import React, { useEffect, useState } from 'react';
import { getDoc, doc, updateDoc } from 'firebase/firestore'; 
import { LogBox } from 'react-native'; 
// Importando Firebase
import { db, auth } from '../../firebase/firebaseConfig'; 
// Importando tela de carregamento
import LoadingScreen from '../LoadingScreen'; 
// Importando componentes
import SelectTwoPilot from '../../components/TRacer/SelectTwoPilot'; 
import SelectOnePilot from '../../components/TRacer/SelectOnePilot';
import SelectedPilots from '../../components/TRacer/SelectedPilots'; 
// Importando estilos
import { TracerContainer, TracerSafeAreaView } from '../../styles/TRacerStyles'; 

const TRacerScreen = ({ navigation, route }) => { // Adicione 'route' aqui
  // Estado para armazenar informações do usuário
  const [user, setUser] = useState(null);
  // Estado para armazenar os pontos disponíveis
  const [TRpoints, setTRPoints] = useState(120);
  // Estado para armazenar a soma dos pontos dos pilotos
  const [totalPoints, setTotalPoints] = useState(0);
  // Estado para armazenar a lista de pilotos selecionados
  const [selectedPilots, setSelectedPilots] = useState(route.params?.pilots || []); // Modificado para usar route.params
  // Estado para controlar o carregamento
  const [loading, setLoading] = useState(true);

  // Ignorando logs não desejados
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

  // Função para calcular a soma dos pontos dos pilotos
  const sumPoints = () => {
    return selectedPilots.reduce((soma, pilot) => soma + pilot.points, 0); // Soma os pontos de todos os pilotos
  };

  useEffect(() => {
    // Atualiza os pontos totais sempre que os pilotos mudarem
    setTotalPoints(sumPoints());
    
    const checkUser = async () => {
      const user = auth.currentUser; // Obtém o usuário autenticado
      if (user) {
        setUser(user); // Armazena o usuário no estado
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid)); // Busca os dados do usuário no Firestore
          if (userDoc.exists()) {
            const userData = userDoc.data(); // Obtém os dados do documento
            // Atualiza a lista de pilotos apenas se não houver pilotos selecionados
            if (selectedPilots.length === 0) {
              setSelectedPilots(userData.selectedPilots || []); // Atualiza a lista de pilotos
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error); // Log de erro se a busca falhar
        }
        setLoading(false); // Define que o carregamento foi concluído
      } else {
        navigation.navigate('Login'); // Navega para a tela de login se não houver usuário autenticado
      }
    };
    checkUser(); // Chama a função para verificar o usuário
  }, [navigation, selectedPilots.length]); // Adiciona selectedPilots.length como dependência
  console.log(selectedPilots)
  // Função para navegar para a seleção de pilotos
  const navigateToPilotSelection = () => {
    navigation.navigate('PilotSelection', { TRpoints, setTRPoints, pilots: selectedPilots, setPilots: setSelectedPilots, user });
  };

  // Função para navegar para a tela de detalhes de um piloto
  const navigateToPilotDetail = (pilot) => {
    navigation.navigate('PilotDetail', { pilot });
  };

  // Função para excluir um piloto
  const deletePilot = async (index) => {
    const pilotToDelete = selectedPilots[index]; // Obtém o piloto a ser deletado

    if (pilotToDelete) {
      const updatedPilots = selectedPilots.filter((_, i) => i !== index); // Remove o piloto da lista
      const userRef = doc(db, 'users', user.uid);
      const dataToUpdate = {
        selectedPilots: updatedPilots, // Atualiza a lista de pilotos no Firestore
        tr_points: TRpoints + pilotToDelete.cust_tr, // Adiciona os pontos do piloto excluído
      };
      
      console.log(TRpoints);
      console.log(pilotToDelete.cust_tr);
      try {
        await updateDoc(userRef, dataToUpdate); // Atualiza no Firestore
        setSelectedPilots(updatedPilots); // Atualiza o estado local
        setTRPoints(TRpoints + pilotToDelete.cust_tr); // Atualiza os pontos locais
      } catch (error) {
        console.error('Error deleting pilot: ', error); // Log de erro se a atualização falhar
      }
    }
  };

  // Se estiver carregando, exibe a tela de carregamento
  if (loading) {
    return <LoadingScreen />;
  }

  // Renderiza a tela principal
  return (
    <TracerSafeAreaView>
      <TracerContainer>
        {selectedPilots.length < 2 ? (
          selectedPilots.length === 0 ? 
            <SelectTwoPilot navigateToPilotSelection={navigateToPilotSelection} /> : 
            <SelectOnePilot 
              navigateToPilotSelection={navigateToPilotSelection} 
              navigateToPilotDetail={navigateToPilotDetail} 
              pilots={selectedPilots} 
              totalPoints={totalPoints} 
              deletePilot={deletePilot} 
            />
        ) : (
          <SelectedPilots 
            navigateToPilotDetail={navigateToPilotDetail} 
            pilots={selectedPilots} 
            totalPoints={totalPoints} 
            deletePilot={deletePilot} 
          />
        )}
      </TracerContainer>
    </TracerSafeAreaView>
  );
};

export default TRacerScreen;
