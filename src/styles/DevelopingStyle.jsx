// Estilo sujeito a ser removido
import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';

export const DevelopingSafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Colors.red_color};
  width: 100%;
  align-items: center;
`;

export const DevelopingTitle = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 24px;
`;

export const DevelopingText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 18px;
`;