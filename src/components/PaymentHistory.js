import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../theme/ThemeProvider'
import { MaterialIcons } from '@expo/vector-icons';


const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

function PaymentHistory() {
    const {theme} = useTheme();

    const histories = [
        {
            id: 1,
            title: "Repellendus occaecati molestiae.",
            amount: "20,315.23",
            date: "10-Mar-2024",
        },
        {
            id: 2,
            title: "Jordyn Westervelt",
            amount: "20,315.23",
            date: "10-Mar-2024",
        },
        {
            id: 3,
            title: "Cooper Geidt",
            amount: "20,315.23",
            date: "10-Mar-2024",
        },
        {
            id: 4,
            title: "Ahmad Bothman",
            amount: "20,315.23",
            date: "10-Mar-2024",
        },
        {
            id: 5,
            title: "Phillip Bator",
            amount: "20,315.23",
            date: "10-Mar-2024",
        },
        {
            id: 6,
            title: "Repellendus occaecati molestiae.",
            amount: "20,315.23",
            date: "10-Mar-2024",
        },
    ]
  return (
    <View>
        {histories.map((history, index) => {
            return (
                <View key={index} style={styles.container}>
      <View style={styles.top}>
        {}
        <Text style={[styles.title, {fontFamily: theme.fonts.regular, color: theme.colors.black}]}>
          {truncateText(history.title, 20)}
        </Text>
        <Text style={[styles.title, {fontFamily: theme.fonts.bold}]}>N {history.amount}</Text>
      </View>
      <View style={styles.top}>
        <Text style={[styles.date, {fontFamily: theme.fonts.bold, color: theme.colors.secondary}]}>{history.date}</Text>
        <TouchableOpacity style={styles.downloadContainer}>
        <Text style={[styles.date, {fontFamily: theme.fonts.regular, color: theme.colors.brand, marginRight: 10}]}>Download PDF</Text>
        <MaterialIcons name="cloud-download" size={24} color={theme.colors.brand} />
        </TouchableOpacity>
      </View>
      </View>
        )
      })}
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
        marginVertical: 8
    },
    title: {
        fontSize: 16
    },
    date: {
        fontSize: 14
    },
    downloadContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
})

export default PaymentHistory
