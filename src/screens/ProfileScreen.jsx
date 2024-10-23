// Importando dependências
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native'; 
import { onAuthStateChanged, signOut } from '@react-native-firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// Importando configurações
import { auth, db, storage } from '../firebase/firebaseConfig';
// Importando estilos
import { ProfileAvatar, ProfileBanner, ProfileButton, ProfileButtonText, ProfileContainerInfo, ProfileInfo, ProfileSettings, ProfileText, ProfileTextContainer, ProfileTitle, ProfileUsername, ProfileView } from '../styles/ProfileStyles';

const ProfileScreen = () => {

  const [avatar, setAvatar] = useState(null);
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Chama a função de logout do Firebase
      console.log('Usuário deslogado com sucesso!');
      // Aqui você pode redirecionar o usuário para outra tela, se necessário
    } catch (error) {
      console.error('Erro ao deslogar:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
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
              <TouchableOpacity>
                <ProfileText>Change Username</ProfileText>
              </TouchableOpacity>
              <TouchableOpacity>
                <ProfileText>Change Favorite Team</ProfileText>
              </TouchableOpacity>
            </ProfileSettings>
          </View>
          <ProfileButton onPress={handleLogout}>
            <ProfileButtonText>LogOut</ProfileButtonText>
          </ProfileButton>
        </ProfileContainerInfo>
      </ProfileInfo>
    </ProfileView>
  );
};

export default ProfileScreen;
