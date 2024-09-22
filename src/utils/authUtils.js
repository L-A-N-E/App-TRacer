// Importando dependências do Firebase para autenticação e Firestore
import { signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
// Importando a configuração do Firebase
import { auth, db } from '../firebase/firebaseConfig';

// Função para sair da conta
export const handleLogout = async () => {
  try {
    // Tenta deslogar o usuário
    await signOut(auth);
    console.log('Usuário deslogado com sucesso!');
  } catch (error) {
    // Captura e exibe erros ao deslogar
    console.error('Erro ao deslogar:', error);
  }
};

// Função para fazer o cadastro
export const handleSignUp = async (email, password, confirmPassword, username, navigation) => {
    // Verifica se as senhas correspondem
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
      // Lança erro se houver problema no cadastro
      throw new Error(error.message);
    }
};

// Função para checar se o nome de usuário já existe
export const checkUsernameExists = async (username) => {
    try {
      // Consulta no Firestore para verificar se o nome de usuário já existe
      const q = query(collection(db, 'users'), where('username', '==', username));
      const querySnapshot = await getDocs(q);
      // Retorna verdadeiro se houver algum resultado
      return !querySnapshot.empty;
    } catch (error) {
      // Lança erro se não conseguir verificar o nome de usuário
      throw new Error('Não foi possível verificar o nome de usuário.');
    }
};

// Função para salvar dados do usuário no Firestore
export const saveUserDataToFirestore = async (uid, username, email) => {
    try {
      // Cria uma referência para o documento do usuário no Firestore
      const userDocRef = doc(db, 'users', uid);
      // Salva os dados do usuário
      await setDoc(userDocRef, { username, email });
    } catch (error) {
      // Lança erro se não conseguir salvar os dados
      throw new Error('Não foi possível salvar os dados do usuário.');
    }
};

// Função de autenticação
export const handleAuthentication = async (email, password, isLogin, user) => {
  try {
    console.log('Iniciando autenticação com:', email);
    // Se o usuário estiver autenticado, tenta deslogá-lo
    if (user) {
      await signOut(auth);
      console.log("Usuário saiu com sucesso!");
    } else {
      // Se é um login, tenta autenticar o usuário
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Usuário logado com sucesso');
      } else {
        // Se não é login, tenta registrar um novo usuário
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Usuário registrado com sucesso');
      }
    }
  } catch (error) {
    // Lança erro se houver problema na autenticação
    throw new Error(error.message); 
  }
};
