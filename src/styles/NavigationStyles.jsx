import styled from "styled-components";
import Colors from "../constant/Colors";

export const NavigationTabIcon = styled.View`
    border-width: 2px;
    border-color: ${(props) => props.color != Colors.ft_color2 ? Colors.red_color : Colors.ft_color2};
    border-radius: ${(props) => props.size + 10}px;
    padding: 3px; 
    justify-content: center;
    align-items: center;
`