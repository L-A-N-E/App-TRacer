// Importando estilos
import styled from "styled-components/native"; 
// Importa o hook para acessar as cores
import { useColors } from '../context/ColorsContext'; 
import Colors from "../constant/Colors";

// Custom hook para usar as cores no styled-components
const useThemeColors = () => {
  const colors = useColors();
  return colors;
};

const baseTextStyle = `
    font-family: 'Montserrat-Light';
    color: #fff;
`;

export const AuthBackground = styled.View`
    flex: 1;
    background-color: ${Colors.red_color};
`
export const AuthView = styled.View`
    flex: 1; 
    padding: 45px 10px;
    justify-content: center; 
    align-items: center;
    gap: 25px;
`;

export const AuthTitle = styled.Text`
    ${baseTextStyle}
    font-size: 24px;
    text-transform: uppercase;
`;

export const AuthBold = styled.Text`
    font-family: 'Montserrat-Bold';
`;

export const AuthButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 232px;
    height: 48px;
    border-radius: 40px;
    border: solid 1px ${() => useThemeColors().br_color};
    background-color: ${Colors.fill_color3};
`;

export const AuthText = styled.Text`
    ${baseTextStyle}    
    font-size: 16px;
    margin-left: 5px;
`
export const AuthLinkText = styled.Text`
    ${baseTextStyle}
    font-size: 12px;
    text-transform: uppercase;
`
export const AuthButtonText = styled.Text`
    font-family: 'Montserrat-Bold';
    color: ${() => useThemeColors().ft_color};
    font-size: 16px;
    text-transform: uppercase;
`;

export const AuthInput = styled.TextInput`
    ${baseTextStyle}
    border-style: solid;
    border-bottom-color: ${() => useThemeColors().ft_color};
    color: ${() => useThemeColors().ft_color};
    border-bottom-width: 1px;
    width: 291px;
    height: 50px;
    padding: 12.5px;
    background-color: ${() => useThemeColors().fill_color3};
`
export const AuthInputsView = styled.View`
    display: flex;
    gap: 11px;
`