import styled from "styled-components/native";
import Colors from "../constant/Colors";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

export const RacesContainer = styled.View`
  flex: 1;
  gap: 20px;
  background-color: ${Colors.ft_color};
`;

export const RacesSafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Colors.red_color};
`;


export const RacesTabContainer = styled.View`
  flex-direction: row;
`;

export const RacesTab = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? Colors.red_color : Colors.fill_color2)};
`;

export const RacesTabText = styled.Text`
  color: ${Colors.ft_color};
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
  color: ${Colors.ft_color};
  font-family: 'Dragrace';
  font-size: 30px;
`;

export const RaceContent = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat-Light';
  color: ${Colors.ft_color};
`;

export const RaceDate= styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-family: 'Montserrat-Bold';
  color: ${Colors.br_color};
`;

export const RaceFlag = styled.Image`
  height: 110px;
  width: 130px;
  border-radius: 20px 0 20px 0;
`
export const RaceGradient = styled(LinearGradient).attrs({
  colors: [ Colors.red_color, Colors.red_color2], 
  start: { x: 0, y: 2 },
  end: { x: 1, y: 0 },
  locations: [0.1, 0.7]
})`
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  border-radius: 20px 0 20px 0;
`;
