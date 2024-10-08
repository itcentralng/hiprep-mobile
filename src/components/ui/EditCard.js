import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { useTheme } from '../../theme/ThemeProvider'
import { MaterialIcons } from '@expo/vector-icons';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

function EditCard({icon, header, text, buttonText}) {
  const {theme} = useTheme();
  const navigation = useNavigation();

  const handleEdit = () => {
    if (buttonText === "Change Password") {
      navigation.navigate('PasswordChange')
    } else {
      navigation.navigate('EmailUpdate')
    }
  }


  return (
      <View>
    
                <View style={styles.bigCard}>
        <View style={styles.bigIconContainer}>
        <MaterialIcons name={icon} size={32} color={theme.colors.brand} />
        </View>
        <Text style={[styles.cardHeader, {fontFamily: theme.fonts.bold}]}>{header}</Text>
        <Text style={[styles.centerText, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>{text}</Text>
        <TouchableOpacity style={styles.ButtonContainer} onPress={handleEdit}>
        <Button title={buttonText} />
        </TouchableOpacity>
        </View>
     
      </View>
  )
}

const styles = StyleSheet.create({
    bigIconContainer: {
        width: 52,
        height: 52,
        borderRadius: 8,
        backgroundColor: "#FFF7FA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
      },
      cardHeader: {
        fontSize: 20,
      },
      cardQuantity: {
        fontSize: 20
      },
      bigCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginVertical: 10
      },
      ButtonContainer: {
        width: "70%"
      },
      centerText: {
        fontSize: 12,
        marginTop: 10,
        marginBottom: 20
      }
})

export default EditCard
