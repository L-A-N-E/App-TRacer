import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

// Função para somar os pontos dos pilotos
export const sumPoints = (pilots) => {
  return pilots.reduce((soma, pilot) => soma + pilot.points, 0);
};

// Função para buscar os pilotos do Firestore
export const fetchPilotsFromFirebase = async (setPilots, setLoading) => {
  const user = auth.currentUser;
  if (user) {
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setPilots(userData.selectedPilots || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }
};

// Função para editar ou adicionar piloto
export const handleEditPilot = (index, navigation, TRpoints, setTRPoints, pilots, setPilots, user) => {
  const isEditing = index !== null;

  if (!isEditing && pilots.length >= 2) {
    alert('Já existem dois pilotos selecionados.');
    return;
  }

  navigation.navigate('PilotSelection', {
    TRpoints,
    setTRPoints,
    pilots, 
    setPilots,
    user,
    indexToEdit: index // Passa o índice do piloto a ser editado (pode ser null para adicionar)
  });
};
