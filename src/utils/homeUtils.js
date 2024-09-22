// Importando dependências do Firestore
import { doc, getDoc, setDoc } from 'firebase/firestore';
// Importando a configuração do Firebase
import { db } from '../firebase/firebaseConfig';

// Função que verifica se o usuário já selecionou um time favorito
export const fetchFavoriteTeam = async (userId) => {
  try {
    // Referência ao documento do usuário no Firestore
    const userDocRef = doc(db, 'users', userId);
    // Obtém os dados do documento do usuário
    const userDoc = await getDoc(userDocRef);
    
    // Verifica se o documento existe
    if (userDoc.exists()) {
      const data = userDoc.data();
      // Retorna o time favorito se existir, caso contrário retorna null
      return data.favoriteTeam || null;
    } else {
      return null; // Retorna null se o documento não existir
    }
  } catch (error) {
    // Captura e exibe erros ao buscar os dados do usuário
    console.error('Error fetching user data:', error);
    throw error; // Lança o erro para tratamento posterior
  }
};

// Função que adiciona o time favorito do usuário ao banco de dados
export const handleSetFavoriteTeam = async (userId, team, setFavoriteTeam, navigation) => {
  try {
    // Referência ao documento do usuário no Firestore
    const userDocRef = doc(db, 'users', userId);
    // Adiciona ou atualiza o time favorito no documento do usuário
    await setDoc(userDocRef, { favoriteTeam: team.team }, { merge: true });
    
    // Atualiza o estado local com o time favorito
    setFavoriteTeam(team.team);
    
    // Navega de volta para a tela inicial
    navigation.navigate('Home'); 
  } catch (error) {
    // Captura e exibe erros ao definir o time favorito
    console.error('Error setting favorite team:', error);
  }
};
