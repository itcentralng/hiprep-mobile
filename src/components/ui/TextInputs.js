import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

function TextInputs({placeholder}) {
  return (
    <View>
      <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: "#E7F0F3",
    padding: 16,
    borderRadius: 8,
    width: "100%",
    marginVertical: 5
  }
})

export default TextInputs
