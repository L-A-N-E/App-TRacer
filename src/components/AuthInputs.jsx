import { TextInput, Text, View } from 'react-native'
import React from 'react'

const AuthInputs = ({ value, onChangeText, placeholder, isPassword }) => {
    return (
      <View>
        <Text>{placeholder != 'Email Andress' ? placeholder : "Email"}</Text>
        <TextInput
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