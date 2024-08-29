import styled from "styled-components/native"; 
import { SafeAreaView, Text, ImageBackground, TouchableOpacity } from "react-native";
import Colors from "../constant/Colors";

export const WelcomeView = styled.View`
    flex: 1; 
    padding: 45px 10px;
    justify-content: center; 
    align-items: center;
    gap: 25px;
`;

export const WelcomeTitle = styled.Text`
    font-family: 'Montserrat'; 
    font-size: 24px;
    color: ${Colors.ft_color};
`;
