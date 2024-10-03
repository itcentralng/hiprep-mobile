import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import Navbar from '../../components/Navbar'
import OutlinedButton from '../../components/ui/OutlinedButton'
import ButtonSmall from '../../components/ui/ButtonSmall'
import TutorCard from '../../components/TutorCard'

function TutorProfileScreen() {
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
            <TutorCard />
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
    }
})

export default TutorProfileScreen
