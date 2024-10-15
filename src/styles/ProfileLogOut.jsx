// Estilo sujeito a ser removido
import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
// Importando Cores
import Colors from '../constant/Colors';

export const ProfileSafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Colors.ft_color};
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ProfileButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${Colors.red_color};
  border-radius:  0 10px 0 10px;
`;

export const ProfileText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 18px;
  color: ${Colors.ft_color};
  text-transform: uppercase;
`;