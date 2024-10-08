import React from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { useTheme } from '../theme/ThemeProvider'
import { MaterialIcons } from '@expo/vector-icons';

function NotFound() {
  const {theme} = useTheme();

  return (
    <View style={styles.bigCard}>
        <View style={styles.center}>
        <View style={styles.bigIconContainer}>
        <MaterialIcons name="book" size={32} color={theme.colors.secondary} />
        </View>
        <Text style={[styles.title, {fontFamily: theme.fonts.bold}]}>No Payments Found</Text>

        <Text style={[styles.centerText, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>There are no payments to display at the moment.</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    bigIconContainer: {
        width: 52,
        height: 52,
        borderRadius: 8,
        backgroundColor: "#F3F7F9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
        marginBottom: 15
      },
      title: {
        fontSize: 16,
        marginVertical: 10
      },
      cardQuantity: {
        fontSize: 20
      },
      bigCards: {
        padding: 20
      },
      bigCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        width: "100%"
      },
      center: {
        padding: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      centerText: {
        textAlign: "center"
      }
})

export default NotFound
