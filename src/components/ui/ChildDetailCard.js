import React from 'react'
import { View } from 'react-native'
import { useTheme } from '../../theme/ThemeProvider'
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


function ChildDetailCard() {
    const {theme} = useTheme();
  return (
    <View>
    <View style={styles.container}>
        <Text style={[styles.headerTitle, {fontFamily: theme.fonts.bold}]}>Child’s Details</Text>

      <View style={styles.tables}>
        
          <View style={styles.table}>
              <Text style={[styles.subjectHeader, {fontFamily: theme.fonts.bold, color: theme.colors.secondary}]}>Full Name:</Text>
              <View style={styles.subjects}>
                  <Text style={[styles.subject, {fontFamily: theme.fonts.bold}]}>Ibrahim Mustapha</Text>
              </View>
          </View>

          <View style={styles.table}>
              <Text style={[styles.subjectHeader, {fontFamily: theme.fonts.bold, color: theme.colors.secondary}]}>DOB:</Text>
              <View style={styles.subjects}>
                  <Text style={[styles.subject, {fontFamily: theme.fonts.bold}]}>14-May-2023</Text>
              </View>
          </View>

          <View style={styles.table}>
              <Text style={[styles.subjectHeader, {fontFamily: theme.fonts.bold, color: theme.colors.secondary}]}>Current Class:</Text>
              <View style={styles.subjects}>
                  <Text style={[styles.subject, {fontFamily: theme.fonts.bold}]}>JSS 3</Text>
              </View>
          </View>

          <View style={styles.table}>
  <Text style={[styles.subjectHeader, { fontFamily: theme.fonts.bold, color: theme.colors.secondary }]}>
    Subject(s):
  </Text>
  <View style={styles.subjects}>
    <Text style={[
      styles.subject, 
      { fontFamily: theme.fonts.bold, backgroundColor: theme.colors.primary, color: "#fff" }
    ]}>
      Mathematics
    </Text>
    <Text style={[
      styles.subject, 
      { fontFamily: theme.fonts.bold, backgroundColor: theme.colors.brand, color: "#fff" }
    ]}>
      Fine Arts
    </Text>
    <Text style={[
      styles.subject, 
      { fontFamily: theme.fonts.bold, backgroundColor: theme.colors.secondary, color: "#fff" }
    ]}>
      English Language
    </Text>
  </View>
</View>

          </View>
        </View>

        <View style={styles.container}>
        <Text style={[styles.headerTitle, {fontFamily: theme.fonts.bold}]}>Child’s Availability</Text>


      <View style={styles.tables}>
        
          <View style={styles.table}>
              <Text style={[styles.subjectHeader, {fontFamily: theme.fonts.bold, color: theme.colors.secondary}]}>Monday:</Text>
              <View style={styles.subjects}>
                  <Text style={[styles.subject, {fontFamily: theme.fonts.bold}]}>12:00PM - 3:00PM</Text>
              </View>
          </View>

          <View style={styles.table}>
              <Text style={[styles.subjectHeader, {fontFamily: theme.fonts.bold, color: theme.colors.secondary}]}>Tuesday:</Text>
              <View style={styles.subjects}>
                  <Text style={[styles.subject, {fontFamily: theme.fonts.bold}]}>10:00AM - 11:00AM</Text>
              </View>
          </View>

          <View style={styles.table}>
              <Text style={[styles.subjectHeader, {fontFamily: theme.fonts.bold, color: theme.colors.secondary}]}>Friday:</Text>
              <View style={styles.subjects}>
                  <Text style={[styles.subject, {fontFamily: theme.fonts.bold}]}>5:00PM - 6:00PM</Text>
              </View>
          </View>

        </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        borderWidth: 1,
        borderColor: "#E7F0F3",
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 8
    },
    tables: {
        marginVertical: 20
      },
      table: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#E7F0F3",
        paddingVertical: 20,
        overflow: "hidden"
      },
      subjects: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        overflow: "hidden"
      },
      subjectHeader: {
        fontSize: 14,
      },
      subject: {
        marginLeft: 5,
        fontSize: 16,
        padding: 5,
        borderRadius: 5,
        fontSize: 14,
      }
})

export default ChildDetailCard
