import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

// Função que verifica se o usuário já selecionou um time
export const fetchFavoriteTeam = async (userId) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const data = userDoc.data();
      return data.favoriteTeam || null;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; 
  }
};

// Função que adiciona o time favorito do usuário ao banco de dados
export const handleSetFavoriteTeam = async (userId, team, setFavoriteTeam, navigation) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    await setDoc(userDocRef, { favoriteTeam: team.team }, { merge: true });
    setFavoriteTeam(team.team);
    navigation.navigate('Home'); 
  } catch (error) {
    console.error('Error setting favorite team:', error);
  }
};
