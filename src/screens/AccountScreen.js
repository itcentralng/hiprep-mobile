import React from 'react'
import TutorProfileScreen from "./Tutor/TutorProfileScreen"
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import Navbar from '../components/Navbar'
import OutlinedButton from '../components/ui/OutlinedButton'
import ButtonSmall from '../components/ui/ButtonSmall'
import TutorCard from '../components/TutorCard'

function AccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <Navbar />
      <View style={styles.buttonContainerWrapper}>
        <View style={styles.buttonContainer}>
            <OutlinedButton title="Booking Summary" />
            <ButtonSmall title="I'd prefer to pick myself" />
        </View>
      </View>
      <View style={styles.tutorCardContainer}>
        <TutorCard />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
},
buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20
},
buttonContainerWrapper: {
    display: "flex",
alignItems: "center",
backgroundColor: '#FFF7FA',
height: 156
},
tutorCardContainer: {
  width: "100%",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}
})

export default AccountScreen
