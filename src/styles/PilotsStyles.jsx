// Importando dependencias
import styled from 'styled-components';
import { Dimensions } from 'react-native';
// Importando cores
import Colors from '../constant/Colors';

// Obter largura da tela
const { width } = Dimensions.get('window');

// Estilos para a seleção de pilotos
export const SelectionContainer = styled.View`
    flex: 1;
    gap: 10px;
`

export const SelectionContainerText = styled.View`
    justify-content: center;
    padding: 10px 20px;
`

export const SelectionText = styled.Text`
    font-family: 'Montserrat-Regular';
    text-transform: uppercase;
    font-size: 12px;
`
export const SelectionBold = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    text-transform: uppercase;
    font-size: 15px;
`

// Estilos para os pilotos
export const PilotsContainer =  styled.View`
    background-color: ${Colors.red_color};
    flex-direction: row;
    height: 160px;
    padding: 0 10px;
    border-radius: 0 10px 0 10px;
    width: ${width - 20}px;
`

export const PilotImage = styled.Image`
    object-fit: cover;
    height: 160px;
    width: 125px;
    
`

export const PilotContent = styled.View`
    padding: 10px;
    justify-content: space-between;
    width: ${width - 165}px;
`

export const PilotName = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    text-transform: uppercase;
    color: ${Colors.ft_color};
`
export const PilotPoints = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const PilotPointsContainer = styled.View`
    justify-content: center;
    align-items: center;
`

export const PilotPointsTitle = styled.Text`
    font-family: 'Montserrat-Regular';
    color: ${Colors.ft_color};
    text-transform: uppercase;
`

export const PilotPointsText = styled.Text`
    font-family: 'Montserrat-Bold';
    color: ${Colors.ft_color};
    text-transform: uppercase;
`

export const PilotButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`

export const PilotButton = styled.TouchableOpacity`
    background-color: ${Colors.ft_color};
    padding: 5px 25px;
    border-radius: 5px;
`

export const PilotButtonText = styled.Text`
    color: ${Colors.red_color};
    font-family: 'Montserrat-ExtraBold';
    text-transform: uppercase;
`

export const PilotText = styled.Text`
    font-family: 'Montserrat-Regular';
    color: ${Colors.ft_color};
    font-size: 15px;
`

export const PilotBold = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    color: ${Colors.ft_color};
    font-size: 20px;
`