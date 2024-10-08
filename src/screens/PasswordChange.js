import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import Button from '../components/ui/Button';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function PasswordChange() {
  const { theme } = useTheme();
  const navigation = useNavigation()

  
  const [isCurrentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={[styles.formHeader, { fontFamily: theme.fonts.bold, color: theme.colors.text }]}>Change Password</Text>
        
        {}
        <Text style={[styles.label, { fontFamily: theme.fonts.regular }]}>Current Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your current password"
            secureTextEntry={!isCurrentPasswordVisible} 
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setCurrentPasswordVisible(!isCurrentPasswordVisible)} 
          >
            <MaterialIcons name={isCurrentPasswordVisible ? "visibility" : "visibility-off"} size={24} color="#E7F0F3" />
          </TouchableOpacity>
        </View>
        
        {}
        <Text style={[styles.label, { fontFamily: theme.fonts.regular }]}>New Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your new password"
            secureTextEntry={!isNewPasswordVisible} 
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setNewPasswordVisible(!isNewPasswordVisible)} 
          >
            <MaterialIcons name={isNewPasswordVisible ? "visibility" : "visibility-off"} size={24} color="#E7F0F3" />
          </TouchableOpacity>
        </View>
        
        {}
        <Text style={[styles.label, { fontFamily: theme.fonts.regular }]}>Confirm New Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your new password"
            secureTextEntry={!isConfirmPasswordVisible} 
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)} 
          >
            <MaterialIcons name={isConfirmPasswordVisible ? "visibility" : "visibility-off"} size={24} color="#E7F0F3" />
          </TouchableOpacity>
        </View>

        {}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('OTP')}
        >
          <Button
            title="Change Password"
            style={[styles.button, { backgroundColor: theme.colors.buttonBackground }]}
            textStyle={{ color: theme.colors.buttonText }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    flex: 1,
    backgroundColor: "#E7F0F3",
  },
  formContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E7F0F3",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  formHeader: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 20,
    width: "70%",
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  inputContainer: {
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
  input: {
    padding: 16,
    borderRadius: 8,
    flex: 1,
    color: "#000",
  },
});

export default PasswordChange;
