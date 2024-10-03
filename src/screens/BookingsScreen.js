import React from 'react'
import Navbar from '../components/Navbar'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../theme/ThemeProvider'
import BookingNavigator from '../components/BookingNavigator';

function BookingsScreen() {
  const {theme} = useTheme();
  return (
    <ScrollView>
      <Navbar />
        <View style={styles.topTextContainer}>
          <Text style={[styles.topText, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>All of the time slots displayed are in the time zone Africa/Lagos GMT +01:00</Text>
        </View>
        <View style={styles.body}>
          <BookingNavigator />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  topTextContainer: {
    padding: 20,
    backgroundColor: "#F3F7F9"
  },
  topText: {
    width: "80%",
    fontWeight: "600"
  },
  body: {
    paddingHorizontal: 20
  }
})

export default BookingsScreen
