// Importando dependências
import styled from 'styled-components';
import { Dimensions, SafeAreaView } from 'react-native';
// Importa o hook para acessar as cores
import { useColors } from '../context/ColorsContext'; 

// Custom hook para usar as cores no styled-components
const useThemeColors = () => {
  const colors = useColors();
  return colors;
};

// Obter largura da tela
const { width } = Dimensions.get('window');

// Estilos para a página principal
export const TracerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
`;

export const TracerContainer = styled.View`
    flex: 1;
    justify-content: center; 
    align-items: center; 
    gap: 20px;
`;

// Estilos para a seção de seleção
export const SectionSelect = styled.View`
    flex: 1; 
    justify-content: center; 
    align-items: center; 
    gap: 20px;
`;

export const SectionTitle = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    padding: 5px;
    text-transform: uppercase;
    text-align: center;
    flex-wrap: wrap;
    font-size: 36px;
`

// Estilo para o piloto
export const SectionContainer = styled.View`
    background-color: ${() => useThemeColors().red_color};
    flex-direction: row;
    height: 160px;
    padding: 0 10px;
    border-radius: 0 10px 0 10px;
    width: ${width - 30}px;
`

export const SectionContent = styled.View`
    background-color: ${() => useThemeColors().red_color};
    flex-direction: row;
    justify-content: space-around;
    height: 160px;
    padding: 0 10px;
    border-radius: 0 10px 0 10px;
    width: ${width - 20}px;
`
export const SectionContentContainer = styled.View`
    justify-content: space-around;
    width: ${width - 180}px;
`

export const SectionButton = styled.TouchableOpacity`
    background-color: ${() => useThemeColors().ft_color};
    padding: 5px 10px;
    border-radius: 5px;
`
export const SectionButtonText = styled.Text`
    color: ${() => useThemeColors().red_color};
    font-family: 'Montserrat-ExtraBold';
    font-size: 12px;
    text-transform: uppercase;
`

export const SectionImage = styled.Image`
    object-fit: cover;
    height: 160px;
    width: 135px;
`

export const SectionTextBold = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    text-transform: uppercase;
    text-align: center;
    color: ${() => useThemeColors().ft_color};
    font-size: 18px;
`
// Estilo da seção de adicionar
export const SectionAdd = styled.TouchableOpacity`
    background-color: ${() => useThemeColors().red_color};
    height: 160px;
    padding: 10px;
    border-radius: 0 10px 0 10px;
    width: ${width - 20}px;
    justify-content: flex-end;
    align-items: flex-end;
`

// Estilo para o texto da pontuação total
export const TotalText = styled.Text`
    font-family: 'Montserrat-Regular';
    font-size: 20px;
    color: ${() => useThemeColors().red_color};
`

export const TotalTextBold = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    font-size: 24px;
`