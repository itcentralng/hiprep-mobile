import React from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { useTheme } from '../../theme/ThemeProvider'
import { MaterialIcons } from '@expo/vector-icons';

function BigCard() {
  const {theme} = useTheme();

  return (
    <View style={styles.bigCard}>
        <Text style={[styles, {fontFamily: theme.fonts.bold}]}>Upcoming Booking</Text>
        <View style={styles.center}>
        <View style={styles.bigIconContainer}>
        <MaterialIcons name="book" size={32} color={theme.colors.secondary} />
        </View>
        <Text style={[styles.centerText, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>There are no booking requests to display at the moment.</Text>
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
      cardHeader: {
        fontSize: 12
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
        marginVertical: 10
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

export default BigCard
