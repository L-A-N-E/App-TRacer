import styled from "styled-components/native";
import Colors from "../constant/Colors";

export const RacesContainer = styled.View`
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

export const RaceItem = styled.View`
  padding: 12px;
  margin: 10px;
  border-bottom-width: 2px;
  border-bottom-color: ${Colors.blk};
  background-color: ${Colors.red_color};
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const RaceDate = styled.Text`
  color: ${Colors.ft_color};
  font-weight: bold;
  font-size: 18px;
`;

export const RaceContent = styled.Text`
  font-size: 14px;
  color: ${Colors.ft_color};
`;

export const RaceLocation = styled.Text`
  font-size: 12px;
  color: ${Colors.br_color};
  margin-top: 4px;
`;

