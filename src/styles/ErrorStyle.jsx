// Importando dependencias
import styled from 'styled-components';
// Impotando cores
import Colors from '../constant/Colors';

export const ErrorContainer = styled.View`
    flex: 1;
  background-color: ${Colors.ft_color};
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ErrorText = styled.Text`
color: ${Colors.ft_color2};
  text-transform: uppercase;
  font-family: 'Montserrat-Bold';
  font-size: 24px;
`