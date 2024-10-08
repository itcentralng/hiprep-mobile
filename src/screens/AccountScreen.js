import React from 'react'
import TutorProfileScreen from "./Tutor/TutorProfileScreen"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import OutlinedButton from '../components/ui/OutlinedButton'
import ButtonSmall from '../components/ui/ButtonSmall'
import TutorCard from '../components/TutorCard'
import { useTheme } from '../theme/ThemeProvider'
import ParentProfileCard from '../components/ParentProfileCard'
import EditCard from '../components/ui/EditCard'
import { useNavigation } from '@react-navigation/native'

function AccountScreen() {
  const {theme} = useTheme();
  const {navigation} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <Navbar />
        <View style={styles.bodyContainer}>
          <Text style={[styles.headerText, {fontFamily: theme.fonts.bold}]}>My Account</Text>
          <ParentProfileCard />
          <EditCard icon="mail-outline" header="Update Email Address" text="Change Current Email Address" buttonText="Update Email" />
          <EditCard icon="lock-outline" header="Change Password" text="Change your current password." buttonText="Change Password" />
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
  bodyContainer: {
    padding: 20
  },
  headerText: {
    fontSize: 20
  }

})

export default AccountScreen
