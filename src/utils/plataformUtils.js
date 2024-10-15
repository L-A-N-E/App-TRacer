import { Platform } from "react-native";

// Função que verifica a plataforma do celular
export const verifyPlataform = () => {
    if(Platform.OS == 'ios'){
        return false
    } else if(Platform.OS == 'android') {
        return true
    } else {
        return null
    }
}