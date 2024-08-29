import { TextInput, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Inputs({ value, onChangeText, placeholder, isPassword }) {
    return (
      <View style={styles.containerInput}>
        <Text style={styles.label}>{placeholder != 'Email Andress' ? placeholder : "Email"}</Text>
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            style={styles.input}
            autoCapitalize='none'
        />
      </View>
    );
  }

const styles = StyleSheet.create({
    containerInput: {
        width: '90%',
    },
    input: {
      width: '100%',
      padding: 10,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
      },
});