import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../theme/ThemeProvider'

function TutorProfileCard({ title, quantity }) {
    const {theme} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {fontFamily: theme.fonts.regular, color: theme.colors.secondary }]}>{title}</Text>
      <Text style={[styles.quantity, {fontFamily: theme.fonts.bold, color: theme.colors.black }]}>{quantity}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3F7F9",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20
    },
    title: {
        fontSize: 14,
        textAlign: "center"
    },
    quantity: {
        fontSize: 32,
        textAlign: "center"
    }
})

export default TutorProfileCard
