// Estilo sujeito a ser removido
import styled from 'styled-components';
import { Dimensions } from 'react-native';
// Importa o hook para acessar as cores
import { useColors } from '../context/ColorsContext'; 

// Custom hook para usar as cores no styled-components
const useThemeColors = () => {
  const colors = useColors();
  return colors;
};

const { height } = Dimensions.get('window');

const bannerHeight = height * 0.25;

export const ProfileView = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${() => useThemeColors().ft_color}; 
`;

export const ProfileBanner = styled.View`
    width: 100%;
    height: 150px; 
    background-color: ${() => useThemeColors().red_color}; 
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const ProfileAvatar = styled.Image`
    width: ${bannerHeight * 0.7}px; 
    height: ${bannerHeight * 0.7}px; 
    border-radius: ${bannerHeight * 0.7 / 2}px;; 
    position: absolute; 
    bottom: -${bannerHeight * 0.25}px; 
    border-width: 4px;
    border-color: ${() => useThemeColors().red_color}; 
`;

export const ProfileInfo = styled.View`
  margin-top: 50px; 
  align-items: center;
  gap: 10px;
`;

export const ProfileUsername = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 24px;
  color: ${() => useThemeColors().red_color};
  text-transform: uppercase;
`;

export const ProfileContainerInfo = styled.View`
  display: flex;
  gap: 20px;
  width: 320px;
`

export const ProfileTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ProfileTitle = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 18px;
  color: ${() => useThemeColors().red_color};
  text-transform: uppercase;
`;

export const ProfileText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 16px;
  color: ${() => useThemeColors().blk};
  text-transform: capitalize;
`;

export const ProfileSettings = styled.View`
  display: flex;
  gap: 10px;
  margin-left: 10px;
  margin-top: 10px;
`

export const ProfileButton = styled.TouchableOpacity`
  background-color: ${() => useThemeColors().red_color};
  border-radius: 50px;

  padding: 10px 5px;
  align-items: center;
`

export const ProfileButtonText = styled.Text`
  font-family: 'Montserrat-Bold';
  text-transform: uppercase;
  color: ${() => useThemeColors().ft_color};
  letter-spacing: 10px;
`
