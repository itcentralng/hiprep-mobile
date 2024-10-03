import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ButtonSmall({title}) {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        height: 52,
        backgroundColor: '#0E6883',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 22
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
        fontSize: 12
    }
})

export default ButtonSmall
