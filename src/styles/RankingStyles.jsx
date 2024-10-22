import styled from 'styled-components';
import Colors from '../constant/Colors'

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
