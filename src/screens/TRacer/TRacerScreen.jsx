// Importando dependências
import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore'; 
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

const TRacerScreen = ({ navigation }) => {
  // Estado para armazenar informações do usuário
  const [user, setUser] = useState(null);
  // Estado para armazenar os pontos disponíveis
  const [TRpoints, setTRPoints] = useState(120);
  // Estado para armazenar a soma dos pontos dos pilotos
  const [totalPoints, setTotalPoints] = useState();
  // Estado para armazenar a lista de pilotos selecionados
  const [pilots, setPilots] = useState([]);
  // Estado para controlar o carregamento
  const [loading, setLoading] = useState(true);

  // Ignorando logs não desejados
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

  // Função para calcular a soma dos pontos dos pilotos
  const sumPoints = () => {
    return pilots.reduce((soma, pilot) => soma + pilot.points, 0); // Soma os pontos de todos os pilotos
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
            setPilots(userData.selectedPilots || []); // Atualiza a lista de pilotos
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
  }, [navigation]);

  // Função para navegar para a seleção de pilotos
  const navigateToPilotSelection = () => {
    navigation.navigate('PilotSelection', { TRpoints, setTRPoints, pilots, setPilots, user });
  };

  // Função para navegar para a tela de detalhes de um piloto
  const navigateToPilotDetail = (pilot) => {
    navigation.navigate('PilotDetail', { pilot });
  };

  // Se estiver carregando, exibe a tela de carregamento
  if (loading) {
    return <LoadingScreen />;
  }

  // Renderiza a tela principal
  return (
    <TracerSafeAreaView>
      <TracerContainer>
        {pilots.length < 2 ? (
          pilots.length === 0 ? 
            <SelectTwoPilot navigateToPilotSelection={navigateToPilotSelection} /> : 
            <SelectOnePilot 
              navigateToPilotSelection={navigateToPilotSelection} 
              navigateToPilotDetail={navigateToPilotDetail} 
              pilots={pilots} 
              totalPoints={totalPoints} 
            />
        ) : (
          <SelectedPilots 
            navigateToPilotDetail={navigateToPilotDetail} 
            pilots={pilots} 
            totalPoints={totalPoints} 
          />
        )}
      </TracerContainer>
    </TracerSafeAreaView>
  );
};

export default TRacerScreen; 
