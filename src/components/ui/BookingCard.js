import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../theme/ThemeProvider'
import { MaterialIcons } from '@expo/vector-icons';


function BookingCard({name, date, day, time, subject, progress}) {
    const {theme} = useTheme();
  return (
    <View style={styles.container}>
        <View style={styles.top}>
        <View style={styles.nameContainer}>
      <Text style={[styles.name, {fontFamily: theme.fonts.bold}]}>Booking for {name}</Text>
      <Text style={[styles.date, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>{date}</Text>
      </View>
      <MaterialIcons name="north-east" size={16} color={theme.colors.black} />
      </View>

        <View style={styles.details}>
            <View>
      <View style={styles.iconContainer}>
      <MaterialIcons name="calendar-today" size={16} color={theme.colors.secondary} />
        <Text style={[styles.day, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>{day}</Text>
      </View>

      <View style={styles.iconContainer}>
      <MaterialIcons name="access-time" size={16} color={theme.colors.secondary} />
        <Text style={[styles.day, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>{time}</Text>
      </View>

      <View style={styles.iconContainer}>
      <MaterialIcons name="book" size={16} color={theme.colors.secondary} />
        <Text style={[styles.day, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>{subject}</Text>
      </View>
      </View>

      <View style={styles.progressContainer}>
        <Text style={[styles.progressText, {fontFamily: theme.fonts.bold}]}>{progress}</Text>
      </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderWidth: 1,
        borderColor: "#E7F0F3",
        backgroundColor: "#fff",
    },
    top: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    name: {
        fontSize: 16
    },
    date: {
        fontSize: 14
    },
    iconContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 3
    },
    day: {
        marginLeft: 10,
        fontSize: 12
    },
    details: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
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
    }
})

export default BookingCard
