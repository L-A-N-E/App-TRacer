import sampleFormulaETeamsData from "../constant/teamsData";

export const findTeamByPilotName = (pilotName) => {
    for (let team of sampleFormulaETeamsData.teams) {
      for (let driver of team.drivers) {
        if (driver.name === pilotName) {
          return team;
        }
      }
    }
    return null; 
  };