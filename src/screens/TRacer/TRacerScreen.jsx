// Importações necessárias
import React, { useEffect, useState } from 'react';
import { getDoc, doc, updateDoc } from 'firebase/firestore'; 
import { LogBox } from 'react-native'; 
// Importando config do firebase
import { db, auth } from '../../firebase/firebaseConfig'; 
// Importando telas
import LoadingScreen from '../LoadingScreen';
// Impoortando componentes
import SelectTwoPilot from '../../components/TRacer/SelectTwoPilot'; 
import SelectOnePilot from '../../components/TRacer/SelectOnePilot'; 
import SelectedPilots from '../../components/TRacer/SelectedPilots'; 
// Importando estilos
import { TracerContainer, TracerSafeAreaView } from '../../styles/TRacerStyles'; 

const TRacerScreen = ({ navigation, route }) => {
  // Estado que armazena o usuário autenticado
  const [user, setUser] = useState(null);
  // Estado que armazena os pontos do usuário, inicializado com 120 (será atualizado pelo Firebase)
  const [TRpoints, setTRPoints] = useState(120);
  // Estado que armazena a soma dos pontos dos pilotos selecionados
  const [totalPoints, setTotalPoints] = useState(0);
  // Estado que armazena a lista de pilotos selecionados (pode ser recebido pela navegação)
  const [selectedPilots, setSelectedPilots] = useState(route.params?.pilots || []);
  // Estado que controla se a tela está em processo de carregamento
  const [loading, setLoading] = useState(true);

  // Ignora logs não desejados que aparecem na navegação sobre valores não serializáveis
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

  // Função para somar os pontos dos pilotos selecionados
  const sumPoints = () => {
    return selectedPilots.reduce((soma, pilot) => soma + pilot.points, 0); // Soma os pontos de cada piloto na lista
  };

  // useEffect para carregar as informações do usuário e pilotos ao inicializar a tela
  useEffect(() => {
    // Atualiza a soma dos pontos dos pilotos selecionados
    setTotalPoints(sumPoints());
    
    // Função assíncrona para verificar se o usuário está autenticado e buscar seus dados
    const checkUser = async () => {
      const user = auth.currentUser; // Obtém o usuário autenticado do Firebase Authentication
      if (user) {
        setUser(user); // Atualiza o estado com o usuário autenticado
        try {
          // Busca o documento do usuário no Firestore usando o UID do usuário
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) { // Se o documento do usuário existir
            const userData = userDoc.data(); // Extrai os dados do documento

            // Verifica se o campo 'tr_points' existe, caso contrário, usa 120 como valor padrão
            const userTRpoints = userData.tr_points !== undefined ? userData.tr_points : 120;
            setTRPoints(userTRpoints); // Atualiza os TRpoints do estado com o valor do Firebase ou 120 como padrão

            // Se não houver pilotos selecionados, define os pilotos do usuário no estado
            if (selectedPilots.length === 0) {
              setSelectedPilots(userData.selectedPilots || []);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error); // Caso ocorra erro ao buscar os dados do Firebase
        }
        setLoading(false); // Define que o carregamento foi concluído
      } else {
        navigation.navigate('Login'); // Se o usuário não estiver autenticado, redireciona para a tela de login
      }
    };
    checkUser(); // Chama a função para verificar o usuário
  }, [navigation, selectedPilots.length]); // O useEffect será disparado quando a navegação ou o número de pilotos selecionados mudar

  // Função para navegar para a tela de seleção de pilotos
  const navigateToPilotSelection = () => {
    // Navega para a tela de 'PilotSelection' passando os pontos e pilotos selecionados
    navigation.navigate('PilotSelection', { TRpoints, setTRPoints, pilots: selectedPilots, setPilots: setSelectedPilots, user });
  };

  // Função para navegar para a tela de detalhes de um piloto específico
  const navigateToPilotDetail = (pilot) => {
    navigation.navigate('PilotDetail', { pilot }); // Passa o piloto selecionado como parâmetro para a tela de detalhes
  };

  // Função para excluir um piloto da lista de selecionados
  const deletePilot = async (index) => {
    const pilotToDelete = selectedPilots[index]; // Obtém o piloto que será excluído com base no índice

    if (pilotToDelete) {
      // Cria uma nova lista de pilotos excluindo o piloto selecionado
      const updatedPilots = selectedPilots.filter((_, i) => i !== index);
      const userRef = doc(db, 'users', user.uid); // Obtém a referência ao documento do usuário no Firestore
      const dataToUpdate = {
        selectedPilots: updatedPilots, // Atualiza a lista de pilotos no Firestore
        tr_points: TRpoints + pilotToDelete.cust_tr, // Adiciona os pontos do piloto excluído de volta ao total
      };

      try {
        // Atualiza os dados no Firestore
        await updateDoc(userRef, dataToUpdate);
        // Atualiza os estados locais de pilotos selecionados e pontos disponíveis
        setSelectedPilots(updatedPilots);
        setTRPoints(TRpoints + pilotToDelete.cust_tr);
      } catch (error) {
        console.error('Error deleting pilot: ', error); // Caso ocorra erro ao excluir o piloto no Firebase
      }
    }
  };

  // Se estiver carregando, exibe a tela de carregamento
  if (loading) {
    return <LoadingScreen />;
  }

  // Renderiza a interface da tela
  return (
    <TracerSafeAreaView>
      <TracerContainer>
        {selectedPilots.length < 2 ? (
          selectedPilots.length === 0 ? 
            // Se não houver pilotos selecionados, renderiza o componente SelectTwoPilot
            <SelectTwoPilot navigateToPilotSelection={navigateToPilotSelection} /> : 
            // Se houver um piloto selecionado, renderiza o componente SelectOnePilot
            <SelectOnePilot 
              navigateToPilotSelection={navigateToPilotSelection} 
              navigateToPilotDetail={navigateToPilotDetail} 
              pilots={selectedPilots} 
              totalPoints={totalPoints} 
              deletePilot={deletePilot} 
            />
        ) : (
          // Se houver dois pilotos selecionados, renderiza o componente SelectedPilots
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
