import styled from "styled-components";
import Colors from "../constant/Colors";

export const NavigationTabIcon = styled.View`
    border-width: 2px;
    border-color: ${(props) => props.color != Colors.blk ? Colors.red_color : Colors.blk};
    border-radius: ${(props) => props.size + 10}px;
    padding: 5px; 
    justify-content: center;
    align-items: center;
`