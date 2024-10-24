// Importando dependencias
import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
// Importa o hook para acessar as cores
import { useColors } from '../context/ColorsContext'; 

// Custom hook para usar as cores no styled-components
const useThemeColors = () => {
  const colors = useColors();
  return colors;
};

// Estilo para o container

export const RankingContainer = styled.View`
  flex: 1;
  gap: 20px;
  background-color: ${() => useThemeColors().ft_color};
`;

export const RankingSafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useThemeColors().red_color};
`;


// Estilo para o tab bar 
export const RankingTabContainer = styled.View`
  flex-direction: row;
`;

export const RankingTab = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? () => useThemeColors().red_color : () => useThemeColors().fill_color2)};
`;

export const RankingTabText = styled.Text`
  color: ${() => useThemeColors().ft_color};
  text-transform: uppercase;
  font-family: 'Montserrat-ExtraBold';
`;

// Estilo para os cards dos ranking

export const RankingGradient = styled.View`
  justify-content: space-between;
  align-items: center ;
  flex-direction: row;
  width: 95%;
  height: 80px;
  border-radius: 10px 0 10px 0;
  padding: 10px ;
  background-color: ${() => useThemeColors().red_color};
`;

export const RankingImage = styled.Image`
  height: 80px;
  width: 80px;
`

// Estilo para posição

export const RankingPos = styled.Text`
  font-family: 'Montserrat-ExtraBold';
  font-size: 50px;
  color: ${() => useThemeColors().ft_color};
`

export const RankingPoints = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 12px;
  text-transform: uppercase;
  color: ${() => useThemeColors().ft_color};
`
export const RankingPointsBold = styled.Text`
  font-family: 'Montserrat-ExtraBold';
  font-size: 15px;
`

export const RankingText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 15px;
  text-transform: capitalize;
  flex-wrap: wrap;
  color: ${() => useThemeColors().ft_color};
`

export const RankingTextView = styled.View`
  width: 170px;
  gap: 5px;
`