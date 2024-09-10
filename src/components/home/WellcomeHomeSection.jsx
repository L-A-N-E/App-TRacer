// Importando dependencias
import React from 'react'
// Importnado estilos
import { HelloWellcome, HomeContainerText, HomeText, HomeWellcomeText } from '../../styles/HomeStyles'

const WellcomeHomeSection = ({ user }) => {
  return (
    <HelloWellcome source={require("../../assets/images/logo/FE_logo.png")}>
        <HomeContainerText>
            <HomeWellcomeText>Hello, {user.displayName} 👋</HomeWellcomeText>
            <HomeText>The nearest you can get to FE!</HomeText>
            <HomeText>And have fun with others fans!</HomeText>
        </HomeContainerText>
    </HelloWellcome>
  )
}

export default WellcomeHomeSection