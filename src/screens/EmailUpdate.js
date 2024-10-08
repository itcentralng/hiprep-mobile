import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../theme/ThemeProvider'
import Button from '../components/ui/Button';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function EmailUpdate() {
    const {theme} = useTheme();
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
                    <Text style={[styles.formHeader, { fontFamily: theme.fonts.bold, color: theme.colors.text }]}>Update Email Address</Text>
                    <Text style={[styles.label, { fontFamily: theme.fonts.regular }]}>Current Email Address</Text>
                    <View style={styles.dateInputContainer}>
                    <TextInput
                        style={styles.dateInput}
                        placeholder="Enter your current Email Address"
                    />
                
            </View>
                    <Text style={[styles.label, { fontFamily: theme.fonts.regular }]}>New Email Address</Text>
                    <View style={styles.dateInputContainer}>
                    <TextInput
                        style={styles.dateInput}
                        placeholder="Enter your new Email Address"
                    />
                
            </View>
                    <Text style={[styles.label, { fontFamily: theme.fonts.regular }]}>Confirm New Email Address</Text>

                    <View style={styles.dateInputContainer}>
                    <TextInput
                        style={styles.dateInput}
                        placeholder="Enter your new Email Address"
                    />
                
            </View>
                    

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('OTP')}
                    >
                        <Button
                            title='Update Email'
                            style={[styles.button, { backgroundColor: theme.colors.buttonBackground }]}
                            textStyle={{ color: theme.colors.buttonText }}
                        />
                    </TouchableOpacity>
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
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#E7F0F3",
        borderRadius: 8,
        backgroundColor: "#fff"
    },
    formHeader: {
        fontSize: 16,
        marginBottom: 10
    },
    buttonContainer: {
        marginVertical: 20,
        width: "70%"
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
        marginTop: 10,
    },
    dateInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#E7F0F3",
        borderRadius: 8,
        marginVertical: 5,
        paddingRight: 10, 
      },
      iconContainer: {
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      dateInput: {
        padding: 16,
        borderRadius: 8,
        flex: 1,
        color: "#000"
      },
})

export default EmailUpdate
