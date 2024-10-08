import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image, View } from 'react-native'
import { useTheme } from '../theme/ThemeProvider'
import { MaterialIcons } from '@expo/vector-icons'

function ParentProfileCard({progress="Active"}) {
  const {theme} = useTheme();

  const getProgressStyles = () => {
    switch (progress) {
      case 'Completed':
        return {
          backgroundColor: "#D9F9E6",
          borderColor: "#B8F1D2",
          color: "#2F9461"
        }
    case 'Active':
      return {
        backgroundColor: "#F3F7F9",
        borderColor: "#CFE1E6",
        color: "#0E6883"
      }
      case 'Canceled':
        return {
          backgroundColor: "#FBF2CB",
          borderColor: "#FDE57E",
          color: "#C8811A"
        }
      default:
        return {
          backgroundColor: "#D9F9E6",
          borderColor: "#B8F1D2",
          color: "#2F9461"
        };
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
       <Image source={require("../../assets/parent.png")} />
      </View>

      <View style={styles.tables}>
        
          <View style={styles.table}>
              <Text style={[styles.subjectHeader, {color: theme.colors.secondary}]}>Full Name:</Text>
              <View style={styles.subjects}>
                  <Text style={styles.subject}>Randolph Turner</Text>
              </View>
          </View>

          <View style={styles.table}>
              <Text style={[styles.subjectHeader, {color: theme.colors.secondary}]}>Email Address:</Text>
              <View style={styles.subjects}>
                  <Text style={styles.subject}>Molly8@hotmail.com</Text>
              </View>
          </View>

          <View style={styles.table}>
              <Text style={[styles.subjectHeader, {color: theme.colors.secondary}]}>Phone Number:</Text>
              <View style={styles.subjects}>
                  <Text style={styles.subject}>726-993-9812</Text>
              </View>
          </View>

          <View style={styles.table}>
              <Text style={[styles.subjectHeader, {color: theme.colors.secondary}]}>Status:</Text>
              <View style={styles.subjects}>
              <View style={[styles.progressContainer, {backgroundColor: getProgressStyles().backgroundColor, borderColor: getProgressStyles().borderColor}]}>
      <Text style={[
                        styles.progressText,
                        { color: getProgressStyles().color, fontFamily: theme.fonts.bold }
                    ]}>
                        {progress}
                    </Text>
                </View>
              </View>
          </View>

          <View style={styles.table}>
              <Text style={[styles.subjectHeader, {color: theme.colors.secondary}]}>Date Joined:</Text>
              <View style={styles.subjects}>
                  <Text style={styles.subject}>Fri Mar 22 2024</Text>
                  <Text style={styles.subject}>15:09:14</Text>
              </View>
          </View>

        </View>
        <View style={styles.buttonContianer}>
        <TouchableOpacity style={[styles.iconContainer, {backgroundColor: theme.colors.primary}]}>
          <MaterialIcons name="edit" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconContainer, {backgroundColor: theme.colors.errorColor}]}>
          <MaterialIcons name="delete" size={24} color="#fff" />
        </TouchableOpacity>
        </View>
        </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 20
  },
  imageContainer: {
    display: "flex",
    alignItems: "center"
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
    // flexDirection: "row",
    // justifyContent: "flex-end",
    // alignItems: "center",
    overflow: "hidden",
    padding: 5,
  },
  subjectHeader: {
    fontSize: 14,
  },
  subject: {
    marginLeft: 5,
    fontSize: 16,
    borderRadius: 5,
    fontSize: 14,
  },
  progressContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#B8F1D2",
    backgroundColor: "#D9F9E6"
},
progressText: {
    color: "#2F9461",
    fontSize: 10
},
buttonContianer: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
},
iconContainer: {
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 4,
  marginHorizontal: 2
}
})

export default ParentProfileCard
