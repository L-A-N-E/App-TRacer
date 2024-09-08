import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constant/Colors';

export const HomeSafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Colors.ft_color};
`;

export const TeamSelectGradient = styled(LinearGradient).attrs({
    colors: [ Colors.red_color2, Colors.red_color], 
    start: { x: 0, y: 2 },
    end: { x: 1.2, y: 0 },
    locations: [0.5,1],
})`
    z-index: 1000;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.red_color};
    width: 100%;
    height: 100%;
`;

export const TeamText = styled.Text`
    position: relative;
    text-transform: uppercase;
    font-family: 'Dragrace';
    text-align: center;
    font-size: 36px;
    padding: 50px 10px;
    color: ${Colors.ft_color};
`

export const TeamButtons = styled.TouchableOpacity`
    width: 100%;
    height: 70px;
    flex-direction: row;
    box-sizing: border-box;
    gap:7px;
    align-items: center;
`
export const TeamName = styled.Text`
    font-family: 'Montserrat';
    text-transform: uppercase;
    color: ${Colors.ft_color};
    font-size: 12px;
    font-weight: 900;
`

export const TeamLogo = styled.Image`
    object-fit: contain;
    width: 22%;
`
  