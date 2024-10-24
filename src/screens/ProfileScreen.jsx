// Importando dependências
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Alert, Modal, Text, TextInput, Button } from 'react-native'; 
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
  const [modalVisible, setModalVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
  const [usernameModalVisible, setUsernameModalVisible] = useState(false); 
  const [newUsername, setNewUsername] = useState(''); 

  const handleLogout = async () => {
    try {
      await signOut(auth); // Chama a função de logout do Firebase
      console.log('Usuário deslogado com sucesso!');
    } catch (error) {
      console.error('Erro ao deslogar:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        const uid = currentUser.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      }
    });

    return () => unsubscribe();
  }, [auth, avatar]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
      setModalVisible(false);
  };

  const openUsernameModal = () => {
    setUsernameModalVisible(true);
  };

  const closeUsernameModal = () => {
    setUsernameModalVisible(false);
    setNewUsername(''); 
  };

  const handleChangeUsername = async () => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const uid = currentUser.uid;
        const docRef = doc(db, "users", uid);
        await setDoc(docRef, { username: newUsername }, { merge: true }); 
        setUserData((prevData) => ({ ...prevData, username: newUsername })); 
        Alert.alert('Sucesso', 'Nome de usuário alterado com sucesso!');
      }
      closeUsernameModal(); // Fecha o modal após a mudança
    } catch (error) {
      console.error("Erro ao mudar o nome de usuário: ", error);
      Alert.alert("Erro", "Não foi possível mudar o nome de usuário.");
    }
  };

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

  const selectImage = async () => {
    // Permissões de acesso à galeria
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      await handleUpload(result.assets[0].uri); // Chama o upload imediatamente após a seleção
    }
  };

  const handleFavoriteTeamSelection = (team) => {
    if (user) {
      handleSetFavoriteTeam(user.uid, team);
      closeModal();
    }
  };

  return (
    <ProfileView>
      {/* Banner com avatar */}
      <ProfileBanner>
        <ProfileAvatar
          source={{ uri: !userData.avatarImg ? 'https://media.istockphoto.com/id/1337144146/pt/vetorial/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=_XeYoSJQIN7GrE08cUQDJCo3U7yvoEp5OKpbhQzpmC0=' : userData.avatarImg }} // Substitua pela URL do seu avatar
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
