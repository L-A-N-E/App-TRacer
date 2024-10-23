// Importando dependencias
import React from 'react';
import { Dimensions } from 'react-native';
// Importando estilos
import { ImageContainer, SectionDetails, Faixa, ShowPilotImage, ContainerPilotName, DetailsPilotName, InfoContainer, ButtonContainer, ButtonDetails1, ButtonDetails2, ButtonText, TextContainer, DetailsContainer, TextUpper, TextInfo } from '../../styles/PilotsStyles';

const { width } = Dimensions.get('window'); // Obtém a largura da tela

const PilotDetailScreen = ({ route, navigation }) => {
  const faixaWidth = 100; // Largura da faixa
  const faixaPosition = (width - faixaWidth) / 2; // Calcula a posição da faixa

  const { pilot } = route.params;

  return (
    <SectionDetails>
    <ImageContainer>
      <Faixa style={{ left: faixaPosition }} />
      <ShowPilotImage
        source={pilot.imagePilot} 
      />
    </ImageContainer>
    <ContainerPilotName>
      <DetailsPilotName>{pilot.name}</DetailsPilotName>
    </ContainerPilotName>
    <InfoContainer>
      <DetailsContainer>
        <ButtonDetails1 onPress={() => navigation.navigate('RPHistory')}>
          <ButtonText>RP historic</ButtonText>
        </ButtonDetails1>
        <ButtonDetails2 onPress={() => navigation.navigate('Graphics')}>
          <ButtonText>Graphics</ButtonText>
        </ButtonDetails2>
      </DetailsContainer>
      <DetailsContainer>
        <TextInfo>RP: <TextUpper>{pilot.points}</TextUpper></TextInfo>
        <TextInfo>Pos <TextUpper>X</TextUpper></TextInfo>
      </DetailsContainer>
    </InfoContainer>
  </SectionDetails>
  );
};

export default PilotDetailScreen;
