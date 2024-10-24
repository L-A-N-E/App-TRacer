// Importando dependências
import React, { useEffect, useState } from 'react';
import { Dimensions, Text } from 'react-native';
// Importando estilos
import { ImageContainer, SectionDetails, Faixa, ShowPilotImage, ContainerPilotName, DetailsPilotName, InfoContainer, ButtonContainer, ButtonDetails1, ButtonDetails2, ButtonText, TextContainer, DetailsContainer, TextUpper, TextInfo } from '../../styles/PilotsStyles';
// Importando função 
import { findTeamByPilotName } from '../../utils/dataUtils';

// Obtendo a largura da tela do dispositivo
const { width } = Dimensions.get('window');

// Componente principal da tela de detalhes do piloto
const PilotDetailScreen = ({ route, navigation }) => {
  // Definindo a largura da faixa colorida e calculando a posição central na tela
  const faixaWidth = 100;
  const faixaPosition = (width - faixaWidth) / 2;

  // Estado que guarda o time do piloto, inicializado como `null`
  const [team, setTeam] = useState(null);

  // Obtendo os parâmetros da rota, que contém os dados do piloto
  const { pilot } = route.params;

  // Hook `useEffect` que é executado quando o nome do piloto (`pilot.name`) muda
  // A função `findTeamByPilotName` procura o time ao qual o piloto pertence
  useEffect(() => {
    setTeam(findTeamByPilotName(pilot.name)); // Atualiza o estado `team` com os dados do time
  }, [pilot.name]); // O hook será executado novamente apenas quando o nome do piloto mudar

  // Verifica se o time foi encontrado. Se não, exibe uma mensagem de erro
  if (!team) {
    return <Text>Piloto não encontrado ou time indefinido</Text>;
  }

  // Renderiza a interface de detalhes do piloto
  return (
    <SectionDetails>
      {/* Container da imagem do piloto com uma faixa colorida abaixo */}
      <ImageContainer>
        {/* Faixa colorida, que usa a cor do time ou um valor padrão ('#000') se não for encontrado */}
        <Faixa style={{ left: faixaPosition }} colors={team['red_color'] || '#000'} />
        {/* Imagem do piloto */}
        <ShowPilotImage source={pilot.imagePilot} />
      </ImageContainer>

      {/* Nome do piloto estilizado com a cor do time */}
      <ContainerPilotName>
        <DetailsPilotName colors={team['red_color'] || '#000'}>{pilot.name}</DetailsPilotName>
      </ContainerPilotName>

      {/* Informações adicionais do piloto */}
      <InfoContainer>
        <DetailsContainer>
          {/* Botões para navegar para outras telas (Histórico de RP e Gráficos), também estilizados com a cor do time */}
          <ButtonDetails1 onPress={() => navigation.navigate('RPHistory')} colors={team['red_color'] || '#000'}>
            <ButtonText colors={team['red_color'] || '#000'}>RP historic</ButtonText>
          </ButtonDetails1>
          <ButtonDetails2 onPress={() => navigation.navigate('Graphics')} colors={team['red_color'] || '#000'}>
            <ButtonText colors={team['red_color'] || '#000'}>Graphics</ButtonText>
          </ButtonDetails2>
        </DetailsContainer>

        {/* Exibindo as estatísticas do piloto, como RP e posição, também estilizadas */}
        <DetailsContainer>
          <TextInfo colors={team['red_color'] || '#000'}>RP: <TextUpper colors={team['red_color'] || '#000'}>{pilot.points}</TextUpper></TextInfo>
          <TextInfo colors={team['red_color'] || '#000'}>Pos <TextUpper colors={team['red_color'] || '#000'}>X</TextUpper></TextInfo>
        </DetailsContainer>
      </InfoContainer>
    </SectionDetails>
  );
};

// Exportando o componente para ser usado em outras partes da aplicação
export default PilotDetailScreen;
