import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../theme/ThemeProvider'; 


function OutlinedButton({title}) {
    const {theme} = useTheme();
  return (
    <View style={[styles.button, { borderColor: theme.colors.brand }]}>
      <Text style={[styles.buttonText, { color: theme.colors.brand }]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        height: 52,
        borderWidth: 2,
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

export default OutlinedButton
