import styled from 'styled-components';
import Colors from '../constant/Colors'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native';


// Estilo para o container

export const RankingContainer = styled.View`
  flex: 1;
  gap: 20px;
  background-color: ${Colors.ft_color};
`;

export const RankingSafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Colors.red_color};
`;


// Estilo para o tab bar 
export const RankingTabContainer = styled.View`
  flex-direction: row;
`;

export const RankingTab = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? Colors.red_color : Colors.fill_color2)};
`;

export const RankingTabText = styled.Text`
  color: ${Colors.ft_color};
  text-transform: uppercase;
  font-family: 'Montserrat-ExtraBold';
`;

// Estilo para os cards dos ranking

export const RankingGradient = styled(LinearGradient).attrs({
  colors: [ Colors.red_color, Colors.red_color2], 
  start: { x: 0, y: 2 },
  end: { x: 1, y: 0 },
  locations: [0.1, 0.7]
})`
  justify-content: space-between;
  align-items: center ;
  flex-direction: row;
  width: 95%;
  height: 80px;
  border-radius: 10px 0 10px 0;
  padding: 10px ;
`;

export const RankingImage = styled.Image`
  height: 80px;
  width: 80px;
`

// Estilo para posição

export const RankingPos = styled.Text`
  font-family: 'Montserrat-ExtraBold';
  font-size: 50px;
  color: ${Colors.ft_color};
`

export const RankingPoints = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 12px;
  text-transform: uppercase;
  color: ${Colors.ft_color};
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
  color: ${Colors.ft_color};
`

export const RankingTextView = styled.View`
  width: 170px;
  gap: 5px;
`