import styled from "styled-components/native"; 
import Colors from "../constant/Colors";
import { View, Text, TouchableOpacity } from "react-native";

const baseTextStyle = `
    font-family: 'Montserrat';
    color: ${Colors.ft_color};
`;

export const AuthBackground = styled.ImageBackground`
    flex: 1;
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
    font-weight: bold;
`;

export const AuthButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 232px;
    height: 48px;
    border-radius: 40px;
    border: solid 1px ${Colors.br_color};
    background-color: ${Colors.fill_color2};
`;

export const AuthText = styled.Text`
    ${baseTextStyle}    
    font-size: 16px;
    margin-left: 5px;
`
export const AuthLinkText = styled.Text`
    ${baseTextStyle}
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
`
export const AuthButtonText = styled.Text`
    ${baseTextStyle}
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
`;

export const AuthInput = styled.TextInput.attrs({
    placeholderTextColor: Colors.ft_color
})`
    ${baseTextStyle}
    border-radius: 10px;
    border: solid 1px ${Colors.br_color};
    width: 291px;
    height: 50px;
    padding: 12.5px;
    background-color: ${Colors.fill_color1};
`
export const AuthInputsView = styled.View`
    display: flex;
    gap: 11px;
`