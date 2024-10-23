// Importando dependencias
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
// Importa o hook para acessar as cores
import { useColors } from '../context/ColorsContext'; 

// Custom hook para usar as cores no styled-components
const useThemeColors = () => {
  const colors = useColors();
  return colors;
};

export const RacesContainer = styled.View`
  flex: 1;
  gap: 20px;
  background-color: ${() => useThemeColors().ft_color};
`;

export const RacesSafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useThemeColors().red_color};
`;


export const RacesTabContainer = styled.View`
  flex-direction: row;
`;

export const RacesTab = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? () => useThemeColors().red_color : () => useThemeColors().fill_color2)};
`;

export const RacesTabText = styled.Text`
  color: ${() => useThemeColors().ft_color};
  text-transform: uppercase;
  font-family: 'Montserrat-ExtraBold';
`;

export const RaceContainerView = styled.View`
  padding: 12px;
  justify-content: center;
  align-items: start;
  gap: 5px;
`
export const RaceCountry = styled.Text`
  color: ${() => useThemeColors().ft_color};
  font-family: 'Dragrace';
  font-size: 30px;
`;

export const RaceContent = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat-Light';
  color: ${() => useThemeColors().ft_color};
`;

export const RaceDate= styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-family: 'Montserrat-Bold';
  color: ${() => useThemeColors().br_color};
`;

export const RaceFlag = styled.Image`
  height: 110px;
  width: 130px;
  border-radius: 20px 0 20px 0;
`
export const RaceGradient = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  border-radius: 20px 0 20px 0;
  background-color: ${() => useThemeColors().red_color}; 
`;
