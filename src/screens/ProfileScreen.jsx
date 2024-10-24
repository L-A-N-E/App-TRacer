// Importando dependências
import React, { useEffect, useState } from 'react'; 
import { View, TouchableOpacity, Alert, Modal } from 'react-native'; 
import { onAuthStateChanged, signOut } from '@react-native-firebase/auth'; 
import { doc, getDoc, setDoc } from 'firebase/firestore'; 
import * as ImagePicker from 'expo-image-picker'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; 
// Importando configurações
import { auth, db, storage } from '../firebase/firebaseConfig'; 
// Importando estilos
import { ProfileAvatar, ProfileBanner, ProfileButton, ProfileButtonText, ProfileContainerInfo, ProfileInfo, ProfileSettings, ProfileText, ProfileTextContainer, ProfileTitle, ProfileUsername, ProfileView } from '../styles/ProfileStyles'; 
// Importando componentes
import TeamSelect from '../components/favoriteTeam/TeamSelect'; 
// Importando função
import { handleSetFavoriteTeam } from '../utils/homeUtils'; 
import ChangeUsername from '../components/profile/ChangeUsername'; 

const ProfileScreen = () => {
  // Gerenciamento de estado para os dados do usuário e modais
  const [modalVisible, setModalVisible] = useState(false); // Controle da visibilidade do modal de seleção de time
  const [avatar, setAvatar] = useState(null); // Controle do avatar selecionado
  const [user, setUser] = useState(null); // Armazena o usuário autenticado
  const [userData, setUserData] = useState({}); // Armazena os dados do Firestore relacionados ao usuário
  const [error, setError] = useState(null); // Armazena mensagens de erro
  const [usernameModalVisible, setUsernameModalVisible] = useState(false); // Controle da visibilidade do modal de mudança de nome de usuário
  const [newUsername, setNewUsername] = useState(''); // Estado para armazenar o novo nome de usuário

  // Função de logout, utilizando o Firebase Auth
  const handleLogout = async () => {
    try {
      await signOut(auth); // Chama a função de logout do Firebase
      console.log('Usuário deslogado com sucesso!');
    } catch (error) {
      console.error('Erro ao deslogar:', error); // Exibe um erro em caso de falha
    }
  };

  // Efeito que escuta mudanças na autenticação e busca dados do Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Define o usuário atual no estado
        const uid = currentUser.uid;
        const docRef = doc(db, "users", uid); // Referência ao documento do usuário no Firestore
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data()); // Armazena os dados do Firestore no estado
        } else {
          console.log('No such document!');
        }
      }
    });

    return () => unsubscribe(); // Retorna uma função de cleanup para evitar vazamentos de memória
  }, [auth, avatar]); // Dependências: mudanças no auth ou avatar acionam o efeito

  // Funções para abrir e fechar o modal de seleção de time
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // Funções para abrir e fechar o modal de mudança de nome de usuário
  const openUsernameModal = () => {
    setUsernameModalVisible(true);
  };

  const closeUsernameModal = () => {
    setUsernameModalVisible(false);
    setNewUsername(''); // Limpa o campo de nome de usuário ao fechar o modal
  };

  // Função para alterar o nome de usuário no Firestore
  const handleChangeUsername = async () => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const uid = currentUser.uid;
        const docRef = doc(db, "users", uid); // Referência ao documento do usuário no Firestore
        await setDoc(docRef, { username: newUsername }, { merge: true }); // Atualiza o nome de usuário no Firestore
        setUserData((prevData) => ({ ...prevData, username: newUsername })); // Atualiza o nome de usuário no estado local
        Alert.alert('Success', 'Username changed successfully!');
      }
      closeUsernameModal(); // Fecha o modal após a mudança
    } catch (error) {
      console.error("Erro ao mudar o nome de usuário: ", error);
      Alert.alert('Error', 'Unable to change username.');
    }
  };

  // Função para fazer o upload de avatar no Firebase Storage
  const handleUpload = async (selectedAvatarUri) => {
    if (!selectedAvatarUri) return;

    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const uid = currentUser.uid;
        const avatarRef = ref(storage, `avatar_users/${uid}`); // Referência ao caminho do arquivo no Firebase Storage

        const response = await fetch(selectedAvatarUri);
        const blob = await response.blob(); // Converte a imagem para um Blob

        await uploadBytes(avatarRef, blob); // Faz o upload do arquivo
        const url = await getDownloadURL(avatarRef); // Obtém a URL do arquivo

        const docRef = doc(db, "users", uid);
        await setDoc(docRef, { avatarImg: url }, { merge: true }); // Atualiza a URL no Firestore

        setAvatar(null);
        Alert.alert('Success', 'Avatar uploaded successfully');
      }
    } catch (error) {
      console.error("Error uploading avatar: ", error);
      setError("Failed to upload avatar.");
    }
  };

  // Função para selecionar uma imagem da galeria
  const selectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync(); // Solicita permissão de acesso à galeria
    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Permite apenas a seleção de imagens
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri); // Armazena o URI da imagem selecionada
      await handleUpload(result.assets[0].uri); // Chama a função de upload
    }
  };

  // Função para manipular a seleção do time favorito
  const handleFavoriteTeamSelection = (team) => {
    if (user) {
      handleSetFavoriteTeam(user.uid, team); // Salva o time favorito no Firestore
      closeModal(); // Fecha o modal após a seleção
    }
  };

  return (
    <ProfileView>
      {/* Banner com avatar */}
      <ProfileBanner>
        <ProfileAvatar
          source={{ uri: !userData.avatarImg ? 'https://media.istockphoto.com/id/1337144146/pt/vetorial/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=_XeYoSJQIN7GrE08cUQDJCo3U7yvoEp5OKpbhQzpmC0=' : userData.avatarImg }} 
        />
      </ProfileBanner>
      {/* Informações do perfil */}
      <ProfileInfo>
        <ProfileUsername>{userData.username}</ProfileUsername> 
        <ProfileContainerInfo>
          <ProfileTextContainer>
            <ProfileTitle>Email: </ProfileTitle>
            <ProfileText>{userData.email}</ProfileText> 
          </ProfileTextContainer>
          <ProfileTextContainer>
            <ProfileTitle>Favorite Team: </ProfileTitle>
            <ProfileText>{userData.favoriteTeam}</ProfileText> 
          </ProfileTextContainer>
          <View>
            <ProfileTitle>Settings</ProfileTitle>
            <ProfileSettings>
              <TouchableOpacity onPress={selectImage}>
                <ProfileText>Change Avatar</ProfileText> 
              </TouchableOpacity>
              <TouchableOpacity onPress={openUsernameModal}>
                <ProfileText>Change Username</ProfileText> 
              </TouchableOpacity>
              <TouchableOpacity onPress={openModal}>
                <ProfileText>Change Favorite Team</ProfileText> 
              </TouchableOpacity>
            </ProfileSettings>
          </View>
          <ProfileButton onPress={handleLogout}>
            <ProfileButtonText>LogOut</ProfileButtonText> 
          </ProfileButton>
        </ProfileContainerInfo>
      </ProfileInfo>
      {/* Modal para mudar o time */}
      <Modal
          animationType="slide"
          transparent={false} 
          visible={modalVisible}
          onRequestClose={closeModal} 
      >
          <TeamSelect handleFavoriteTeamSelection={handleFavoriteTeamSelection}/>
      </Modal>
      {/* Modal para mudar nome de usuário */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={usernameModalVisible}
        onRequestClose={closeUsernameModal}
      >
        <ChangeUsername newUsername={newUsername} setNewUsername={setNewUsername} handleChangeUsername={handleChangeUsername} closeUsernameModal={closeUsernameModal} /> 
      </Modal>
    </ProfileView>
  );
};

export default ProfileScreen;
