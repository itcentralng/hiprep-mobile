import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../theme/ThemeProvider'
import Button from '../components/ui/Button';
import { MaterialIcons } from '@expo/vector-icons';

function EmailUpdateSuccess() {
    const {theme} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>

      <View style={styles.bigIconContainer}>
        <MaterialIcons name="check" size={60} color="#0BB508" />
        </View>
                    <Text style={[styles.formHeader, { fontFamily: theme.fonts.bold, color: theme.colors.text }]}>Your email address has been updated successfully.</Text>
        
                </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 20,
        flex: 1,
        backgroundColor: "#E7F0F3"
    },
    formContainer: {
        paddingVertical: 124,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#E7F0F3",
        borderRadius: 8,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    formHeader: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: "center"
    },
    buttonContainer: {
        marginVertical: 20,
        width: "50%"
    },
    input: {
        borderWidth: 2,
        borderColor: "#E7F0F3",
        padding: 16,
        borderRadius: 8,
        width: "100%",
        marginVertical: 5
    },
    daySelectionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
        marginVertical: 10,
    },
    bigIconContainer: {
        width: 120,
        height: 120,
        borderRadius: 100,
        backgroundColor: "#0BB5081A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
      },
})

export default EmailUpdateSuccess
