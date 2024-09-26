// Página que é mostrada na tela de perfil que ainda desenvolveremos na próxima SPRINT
// Importando dependencias
import React from 'react'
import { getAuth, signOut } from 'firebase/auth';
// Importando estilos'
import { ProfileSafeView, ProfileButton, ProfileText } from '../styles/ProfileLogOut'
import { DevelopingText, DevelopingTitle } from '../styles/DevelopingStyle'

const ProfileLogOut = () => {
    const handleLogout = async () => {
      const auth = getAuth();
      try {
        await signOut(auth); // Chama a função de logout do Firebase
        console.log('Usuário deslogado com sucesso!');
        // Aqui você pode redirecionar o usuário para outra tela, se necessário
      } catch (error) {
        console.error('Erro ao deslogar:', error);
      }
    };
  
    return (
      <ProfileSafeView>
        <DevelopingTitle>Screen in Development</DevelopingTitle>
        <DevelopingText>Soon available</DevelopingText>
        <ProfileButton onPress={handleLogout}>
          <ProfileText>LogOut</ProfileText>
        </ProfileButton>
      </ProfileSafeView>
    );
  };

export default ProfileLogOut