import React from 'react'
import Navbar from '../../components/Navbar'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../theme/ThemeProvider'
import SecondaryButton from '../../components/ui/SecondaryButton';
import { MaterialIcons } from '@expo/vector-icons';
import BigCard from '../../components/ui/BigCard';


function DashboardScreen() {
  const {theme} = useTheme();
  return (
    <SafeAreaView>
      <ScrollView>
      <Navbar />
      <View style={styles.greetingsContainer}>
        <View style={styles.greetings}>
          <Text style={[styles.greetingsHeader, {fontFamily: theme.fonts.bold}]}>Hi, James Curtis 👋🏻</Text>
          <Text style={[styles.greetingsText, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>Good to see you back</Text>
        </View>
      </View>
      <View style={styles.smallCards}>

      <View style={styles.smallCard}>
        <View style={styles.iconContainer}>
        <MaterialIcons name="money" size={18} color={theme.colors.primary} />
        </View>
        <View style={styles.cardTexts}>
          <Text style={[styles.cardHeader, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>No. of Children</Text>
          <Text style={[styles.cardQuantity, {fontFamily: theme.fonts.bold}]}>3</Text>
        </View>
      </View>

      <View style={styles.smallCard}>
        <View style={styles.iconContainer}>
        <MaterialIcons name="book" size={18} color={theme.colors.brand} />
        </View>
        <View style={styles.cardTexts}>
          <Text style={[styles.cardHeader, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>Bookings</Text>
          <Text style={[styles.cardQuantity, {fontFamily: theme.fonts.bold}]}>29</Text>
        </View>
      </View>

      <View style={styles.smallCard}>
        <View style={styles.iconContainer}>
        <MaterialIcons name="schedule" size={18} color={theme.colors.primary} />
        </View>
        <View style={styles.cardTexts}>
          <Text style={[styles.cardHeader, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>Session in M...</Text>
          <Text style={[styles.cardQuantity, {fontFamily: theme.fonts.bold}]}>1,129</Text>
        </View>
      </View>

      </View>

      <View style={styles.bigCards}>
        <BigCard />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  greetingsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  greetingsHeader: {
    fontSize: 16
  },
  greetingsText: {
    fontSize: 12
  },
  smallCards: {
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10

  },
  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 50,
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
  
})

export default DashboardScreen
