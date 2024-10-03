import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Button({title}) {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 52,
        backgroundColor: '#0E6883',
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 32
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
        fontSize: 16
    }
})

export default Button
