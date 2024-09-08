import styled from "styled-components/native";
import Colors from "../constant/Colors";
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

export const RacesContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Colors.ft_color};
`;

export const RacesTabContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const RacesTab = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? Colors.red_color : Colors.fill_color2)};
`;

export const RacesTabText = styled.Text`
  color: ${Colors.ft_color};
  font-weight: bold;
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
  font-size: 14px;
  font-weight: 300;
  color: ${Colors.ft_color};
`;

export const RaceDate= styled.Text`
  font-size: 14px;
  font-weight: 900;
  color: ${Colors.br_color};
`;

export const RaceFlag = styled.Image`
  height: 110px;
  width: 130px;
  border-radius: 20px 0 20px 0;
`
export const RaceGradient = styled(LinearGradient).attrs(() => ({
  colors: [ Colors.blk, Colors.red_color, Colors.ft_color], 
  start: { x: 0, y: 2 },
  end: { x: 1, y: 0 },
}))`
  justify-content: space-between;
  flex-direction: row;
  background-color: ${Colors.red_color};
  width: 95%;
  border-radius: 20px 0 20px 0;
`;
