import React from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const INPUT_WIDTH = width * 0.8

interface CustomInputFieldProps {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  onBlur: (e: any) => void
  secureTextEntry?: boolean
}

export const CustomInputField = (props: CustomInputFieldProps) => {
  const { placeholder, value, onChangeText, onBlur, secureTextEntry = false } = props

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    marginBottom: 14,
    paddingHorizontal: 8,
  },
  input: {
    height: 50,
    width: INPUT_WIDTH,
    borderColor: 'gray',
    borderWidth: 0.3,
    paddingLeft: 8,
    borderRadius: 4,
  },
})

export default { CustomInputField }
