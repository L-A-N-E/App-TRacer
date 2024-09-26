// Página que é mostrada em telas que ainda desenvolveremos na próxima SPRINT
// Importando dependencias
import React from 'react'
// Importando estilos
import { DevelopingSafeView, DevelopingText, DevelopingTitle } from '../styles/DevelopingStyle'

const Developing = () => {
  return (
    <DevelopingSafeView>
      <DevelopingTitle>Screen in Development</DevelopingTitle>
      <DevelopingText>Soon available</DevelopingText>
    </DevelopingSafeView>
  )
}

export default Developing