// Importando dependencias
import styled from 'styled-components';
import { Dimensions, TouchableOpacity } from 'react-native';
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

// Estilo para o detalhes dos pilotos

export const SectionDetails = styled.View`
  flex: 1;
`;

export const ImageContainer = styled.View`
  justify-content: flex-end;
  align-items: center;
  height: 62%; 
  position: relative;
  background-color: ${Colors.br_color};
`;

export const Faixa = styled.View`
  position: absolute;
  top: 0;
  width: 100px; 
  height: 100%; 
  background-color: ${Colors.red_color}; 
  z-index: 0; 
`;

export const ShowPilotImage = styled.Image`
  width: 300px;
  height: 300px;
  z-index: 1; 
`;

export const ContainerPilotName = styled.View`
    background-color: ${Colors.br_color};
    display: flex;
    height: 10%;
    justify-content: center; 
    align-items: center; 
    elevation: 5;
`;

export const DetailsPilotName = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    text-transform: uppercase;
    color: ${Colors.red_color};
    font-size: 26px;
    text-align: center; 
`;

export const InfoContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const DetailsContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 40px;
`

export const ButtonDetails1 = styled(TouchableOpacity)`
    padding: 10px 20px;
    border-radius: 0 0 0 10px;
    background-color: ${Colors.red_color};
`

export const ButtonDetails2 = styled(TouchableOpacity)`
    padding: 10px 20px;
    border-radius: 0 10px 0 0;
    background-color: ${Colors.red_color};
`

export const ButtonText = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    text-transform: uppercase;
    color: ${Colors.ft_color};
    font-size: 16px;
    text-align: center; 
`;

export const TextUpper = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    text-transform: uppercase;
    color: ${Colors.red_color};
    font-size: 40px;
    text-align: center; 
`

export const TextInfo = styled.Text`
    width: 140px;
    font-family: 'Montserrat-ExtraBold';
    text-transform: uppercase;
    color: ${Colors.red_color};
    font-size: 24px;
    text-align: center;
`