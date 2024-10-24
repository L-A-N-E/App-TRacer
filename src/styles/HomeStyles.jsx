// Importando dependencias
import styled from 'styled-components';
import { Dimensions, SafeAreaView } from 'react-native';
// Importa o hook para acessar as cores
import { useColors } from '../context/ColorsContext'; 

// Custom hook para usar as cores no styled-components
const useThemeColors = () => {
  const colors = useColors();
  return colors;
};

// Obter largura da tela
const { width } = Dimensions.get('window');

export const HomeSafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useThemeColors().red_color};
  width: 100%;
  align-items: center;
`;

// Estilos da seleção de time

export const TeamSelectGradient = styled.View`
    z-index: 1000;
    justify-content: center;
    align-items: center;
    background-color: ${() => useThemeColors().red_color};
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
    color: ${() => useThemeColors().ft_color};
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
    background-color: ${() => useThemeColors().fill_color3};
`
export const TeamName = styled.Text`
    font-family: 'Montserrat-Bold';
    text-transform: uppercase;
    color: ${() => useThemeColors().ft_color};
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
    background-color: ${() => useThemeColors().red_color};
    height: 200px;
    align-items: center;
    justify-content: flex-end;
`

export const HomeWellcomeText = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    font-size: 24px;
    color: ${() => useThemeColors().ft_color};
    opacity: 1;

`

export const HomeText = styled.Text`
    font-family: 'Montserrat-Regular';
    text-transform: uppercase;
    color: ${() => useThemeColors().ft_color};
`

export const HomeContainerText = styled.View`
    width: 90%;
    gap: 2px;
    padding: 30px 10px;
`

// Estilos para ranking

export const HomeRankingContainer = styled.View`
    width:100%;
    padding: 20px;
    flex-direction: row;
    align-items: flex-end;
    gap: 20px;
    justify-content: space-around;
    border-radius: 0 0 0 10px;
    background-color: ${() => useThemeColors().red_color};
`;


// Estilos para próxima corrida

export const HomeContainer = styled.View`
    width: 100%;
    gap: 10px;
    background-color: ${() => useThemeColors().ft_color};
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
    background-color: ${() => useThemeColors().br_color};
`;

export const HomeUpText = styled.Text`
    font-family: 'Montserrat-ExtraBold';
    text-transform: uppercase;
`

export const HomeUpRaceContainer = styled.View`
    width:100%;
    padding: 20px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    border-radius: 0 0 0 10px;
    background-color: ${() => useThemeColors().red_color};
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
    color: ${() => useThemeColors().ft_color};
    font-size: 12px;
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
    color: ${() => useThemeColors().ft_color};
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