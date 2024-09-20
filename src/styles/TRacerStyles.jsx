// Importando dependências
import styled from 'styled-components';
import Colors from '../constant/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';

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
`;

export const SectionTitle = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    padding: 5px;
    text-transform: uppercase;
    text-align: center;
    flex-wrap: wrap;
    font-size: 36px;
`

export const SectionContainer = styled.View`
    background-color: ${Colors.red_color};
    flex-direction: row;
    height: 160px;
    padding: 0 10px;
    border-radius: 0 10px 0 10px;
    width: ${width - 40}px;
`

export const SectionImage = styled.Image`
    object-fit: cover;
    height: 160px;
    width: 135px;
`