import styled from "styled-components/native"; 
import Colors from "../constant/Colors";
import { Text, TouchableOpacity } from "react-native";

export const AuthBackground = styled.ImageBackground`
    flex: 1;
`
export const AuthButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 232px;
    height: 48px;
    border-radius: 10px;
    border: solid 1px ${Colors.br_color};
    background-color: ${Colors.fill_color2};
`;

export const AuthText = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    color: ${Colors.ft_color};
`;
