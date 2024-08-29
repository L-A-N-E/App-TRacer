import { signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/firebaseConfig';
import { doc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';

// Função para sair da conta
export const handleLogout = async () => {
  try {
    await signOut(auth);
    console.log('Usuário deslogado com sucesso!');
  } catch (error) {
    console.error('Erro ao deslogar:', error);
  }
};

// Função para fazer o cadastro
export const handleSignUp = async (email, password, confirmPassword, username, navigation) => {
    if (password !== confirmPassword) {
      throw new Error('As senhas não correspondem.');
    }
  
    try {
      // Verifica se o nome de usuário já está em uso
      const usernameExists = await checkUsernameExists(username);
      if (usernameExists) {
        throw new Error('Nome de usuário já está em uso.');
      }
  
      // Cria o usuário com email e senha
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Atualiza o perfil do usuário com o nome de usuário
      await updateProfile(user, { displayName: username });
      
      // Salva os dados do usuário no Firestore
      await saveUserDataToFirestore(user.uid, username, email);
      
      // Redireciona para a tela de login após o registro
      navigation.navigate('LoginScreen');
    } catch (error) {
      throw new Error(error.message);
    }
};

// Checa se o usurname já existe
export const checkUsernameExists = async (username) => {
    try {
      const q = query(collection(db, 'users'), where('username', '==', username));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      throw new Error('Não foi possível verificar o nome de usuário.');
    }
};

// Salvar dados no banco de dados
export const saveUserDataToFirestore = async (uid, username, email) => {
    try {
      const userDocRef = doc(db, 'users', uid);
      await setDoc(userDocRef, { username, email });
    } catch (error) {
      throw new Error('Não foi possível salvar os dados do usuário.');
    }
};

// Função de autenticação
export const handleAuthentication = async (email, password, isLogin, user) => {
  try {
    console.log('Iniciando autenticação com:', email);
    if (user) {
      await signOut(auth);
      console.log("Usuário saiu com sucesso!");
    } else {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Usuário logado com sucesso');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Usuário registrado com sucesso');
      }
    }
  } catch (error) {
    throw new Error(error.message); 
  }
};
