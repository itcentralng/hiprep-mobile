import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../theme/ThemeProvider'
import { MaterialIcons } from '@expo/vector-icons';


function SecondaryButton({title}) {
    const {theme} = useTheme()
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: theme.colors.brand}]}>
        <MaterialIcons name="content-paste" size={10} color="#FFF" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        height: 29,
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
        fontSize: 10,
        marginLeft: 5
    }
})

export default SecondaryButton
