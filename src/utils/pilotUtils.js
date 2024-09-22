// Função que retorna os pilotos disponíveis, filtrando os que já foram selecionados
export const getAvailablePilots = (drivers, selectedPilots) => {
  // Retorna apenas os pilotos que não estão na lista de selecionados
  return drivers.filter(driver => 
      !selectedPilots.some(p => p.name === driver.name)
  );
};

// Função que cria uma confirmação para a seleção de um piloto
export const confirmPilotSelection = (pilot, handleSelectPilot) => {
  return {
      title: "Confirm Purchase", // Título da mensagem de confirmação
      message: `Do you want to buy ${pilot.name} for ${pilot.cust_tr} points?`, // Mensagem que exibe o nome do piloto e o custo
      buttons: [
          {
              text: "Cancel", 
              style: "cancel", 
          },
          {
              text: "Buy", // Botão para confirmar a compra
              onPress: () => handleSelectPilot(pilot), // Chama a função handleSelectPilot passando o piloto selecionado
          },
      ],
  };
};
