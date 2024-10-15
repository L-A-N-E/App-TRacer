// Estilo sujeito a ser removido
import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
// Importando Cores
import Colors from '../constant/Colors';

export const DevelopingSafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Colors.ft_color};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const DevelopingTitle = styled.Text`
  color: ${Colors.ft_color2};
  text-transform: uppercase;
  font-family: 'Montserrat-Bold';
  font-size: 24px;
`;

export const DevelopingText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  color: ${Colors.ft_color2};
  text-transform: uppercase;
`;