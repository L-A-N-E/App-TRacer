// Importando dependencias
import styled from 'styled-components';
// Importa o hook para acessar as cores
import { useColors } from '../context/ColorsContext'; 

// Custom hook para usar as cores no styled-components
const useThemeColors = () => {
  const colors = useColors();
  return colors;
};

export const ErrorContainer = styled.View`
    flex: 1;
  background-color: ${() => useThemeColors().ft_color};
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ErrorText = styled.Text`
color: ${() => useThemeColors().ft_color2};
  text-transform: uppercase;
  font-family: 'Montserrat-Bold';
  font-size: 24px;
`