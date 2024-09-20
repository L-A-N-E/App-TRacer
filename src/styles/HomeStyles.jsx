// Importando dependencias
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
// Importando constante
import Colors from '../constant/Colors';

// Obter largura da tela
const { width } = Dimensions.get('window');

export const HomeSafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Colors.red_color};
  width: 100%;
  align-items: center;
`;

// Estilos da seleção de time

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
    width: ${width - 30}px;
    height: 70px;
    padding: 20px;
    border-radius: 10px 0 10px 0;
    flex-direction: row;
    box-sizing: border-box;
    gap:7px;
    align-items: center;
    background-color: ${Colors.fill_color3};
`
export const TeamName = styled.Text`
    font-family: 'Montserrat-Bold';
    text-transform: uppercase;
    color: ${Colors.ft_color};
    font-size: 12px;
`

export const TeamLogo = styled.Image`
    object-fit: contain;
    height: 50px;
    width: 20%;
`
// Estilos da página principal do Home

export const HelloWellcome = styled.ImageBackground`
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: flex-end;
`

export const HomeWellcomeText = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    font-size: 24px;
    color: ${Colors.ft_color};
    opacity: 1;

`

export const HomeText = styled.Text`
    font-family: 'Montserrat-Regular';
    text-transform: uppercase;
    color: ${Colors.ft_color};
`

export const HomeContainerText = styled.View`
    width: 90%;
    gap: 2px;
    padding: 30px 10px;
`

// Estilos para ranking

export const HomeRankingContainer = styled(LinearGradient).attrs({
    colors: [ Colors.red_color2, Colors.red_color], 
    start: { x: 0, y: 2 },
    end: { x: 1.2, y: 0 },
    locations: [0.2,1],
})`
    width:100%;
    padding: 20px;
    flex-direction: row;
    align-items: flex-end;
    gap: 20px;
    justify-content: space-around;
    border-radius: 0 0 0 10px;

`;


// Estilos para próxima corrida

export const HomeContainer = styled.View`
    width: 100%;
    gap: 10px;
    background-color: ${Colors.ft_color};
`

export const HomeUpRaces = styled.View`
    width: 100%;
    padding: 10px;
    gap: 5px;
`
export const HomeUpTextContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border-radius: 0 10px 0 0;
    background-color: ${Colors.br_color};
`;
export const HomeUpText = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    text-transform: uppercase;
`

export const HomeUpRaceContainer = styled(LinearGradient).attrs({
    colors: [ '#D9072D', '#D9072D'], 
    start: { x: 0, y: 2 },
    end: { x: 1.2, y: 0 },
    locations: [0.2,1],
})`
    width:100%;
    padding: 20px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    border-radius: 0 0 0 10px;

`;

export const HomeUpRaceTextContainer = styled.View`
    gap: 10px;
`

export const HomeUpRaceImage = styled.Image`
    height: 40px;
    width: 60px;
    border-radius: 0 10px 0 10px;
`

export const HomeUpRaceText = styled.Text`
    font-family: 'Montserrat-Regular';
    text-transform: uppercase;
    color: ${Colors.ft_color};
    font-size: 12px;
`

export const HomeUpViewMoreText = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    text-transform: uppercase;
    color: ${Colors.ft_color};
    background-color: ${Colors.fill_color1};
    font-size: 12px;
    border: solid 1px ${Colors.ft_color};
    padding: 4px 7px;
    border-radius: 5px;
`
// Estilos para os Pilotos

export const HomePilots = styled.View`
    width: ${width - 60}px ;
    height: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`
export const HomePilotsTextContainer = styled.View`
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`
export const HomePilotsText = styled.Text`
    font-family: 'Montserrat-Regular';
    color: ${Colors.ft_color};
    text-transform: uppercase;
`

// Estilos para o time

export const HomeTeamTextContainer = styled.View`
    height: 100%;
    justify-content: space-between;
    align-items: flex-start;
`

export const HomeTeam = styled.View`
    width: ${width - 60}px ;
    height: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`