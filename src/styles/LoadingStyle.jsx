// Importando dependencias
import styled from 'styled-components/native';
// Importa o hook para acessar as cores
import { useColors } from '../context/ColorsContext'; 

// Custom hook para usar as cores no styled-components
const useThemeColors = () => {
  const colors = useColors();
  return colors;
};

export const LoadingContainer = styled.View`
    flex: 1;
    background-color: ${() => useThemeColors().ft_color};
    justify-content: center;
    align-items: center;
`;