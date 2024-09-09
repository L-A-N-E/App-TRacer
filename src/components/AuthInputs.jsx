// Importando dependencias
import { View } from 'react-native'
import React from 'react'
// Importando estilos
import { AuthInput, AuthText } from '../styles/AuthStyles';

const AuthInputs = ({ value, onChangeText, placeholder, isPassword }) => {
    return (
      <View>
        <AuthText>{placeholder != 'Email Address' ? placeholder : "Email"}</AuthText>
        <AuthInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            autoCapitalize='none'
        />
      </View>
    );
  }

export default AuthInputs