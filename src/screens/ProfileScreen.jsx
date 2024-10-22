// Importando dependências
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'; 
import { ProfileAvatar, ProfileBanner, ProfileButton, ProfileButtonText, ProfileContainerInfo, ProfileInfo, ProfileSettings, ProfileText, ProfileTextContainer, ProfileTitle, ProfileUsername, ProfileView } from '../styles/ProfileStyles';
import { onAuthStateChanged, signOut } from '@react-native-firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';
import ProfileLogOut from '../components/ProfileLogOut';

const ProfileScreen = () => {

  const [userData, setUserData] = useState({});

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
            setUserData(docSnap.data());
        }
    });

    return () => unsubscribe();
}, [auth]);

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
                <TouchableOpacity>
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
