import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; // Import the icon
import { useTheme } from '../../theme/ThemeProvider';


function EducationCard() {
    const {theme} = useTheme();
  return (
    <SafeAreaView>
        <View style={[styles.container, {backgroundColor: theme.colors.brandLight}]}>
            <View style={styles.top}>
                <Text style={[styles.header, {fontFamily: theme.fonts.bold}]}>Education</Text>
                <View style={styles.iconContainer}>
                <MaterialIcons name="expand-more" size={20} color="#000" />
                </View>
            </View>
            <Text style={[styles.degree, {fontFamily: theme.fonts.bold}]}>Bachelor of Science, Computer Engineering</Text>
            <Text style={[styles.university, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>University of Nairobi, Kenya</Text>
            <Text style={[styles.date, {fontFamily: theme.fonts.bold, color: theme.colors.brand}]}>May 2009 — Dec 2014</Text>
      </View>
        <View style={[styles.container, {backgroundColor: theme.colors.brandLight}]}>
            <View style={styles.top}>
                <Text style={[styles.header, {fontFamily: theme.fonts.bold}]}>Experiences</Text>
                <View style={styles.iconContainer}>
                <MaterialIcons name="expand-more" size={20} color="#000" />
                </View>
            </View>
            <Text style={[styles.degree, {fontFamily: theme.fonts.bold}]}>K6 Math Teacher</Text>
            <View style={styles.bottom}>
                <Text style={[styles.university, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>Preply</Text>
                <View style={[styles.circle, {backgroundColor: theme.colors.brand}]}></View>
                <Text style={[styles.date, {fontFamily: theme.fonts.bold, color: theme.colors.brand}]}>May 2009 — Dec 2014</Text>
            </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ 
    container: {
        borderRadius: 8,
        padding: 24,
        marginVertical: 10
    },
    top: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    header: {
        fontSize: 20
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    degree: {
        fontSize: 16,
        marginBottom: 5
    },
    university: {
        fontSize: 14
    },
    date: {
        fontSize: 12
    },
    circle: {
        width: 6,
        height: 6,
        borderRadius: 50,
        marginHorizontal: 5
    },
    bottom: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
})

export default EducationCard
