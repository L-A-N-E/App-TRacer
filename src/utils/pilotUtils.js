export const getAvailablePilots = (drivers, selectedPilots) => {
    return drivers.filter(driver => !selectedPilots.some(p => p.name === driver.name));
  };
  
export const confirmPilotSelection = (pilot, handleSelectPilot) => {
    return {
      title: "Confirm Purchase",
      message: `Do you want to buy ${pilot.name} for ${pilot.cust_tr} points?`,
      buttons: [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Buy",
          onPress: () => handleSelectPilot(pilot),
        },
      ],
    };
};
  