import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from '../components/Navbar';
import TextInput from '../components/ui/TextInputs';
import Button from '../components/ui/Button';
import { useTheme } from '../theme/ThemeProvider'; // Import the useTheme hook

function LoginScreen({ navigation }) {
  const { theme } = useTheme(); // Get the current theme

  return (
    <View style={[styles.screen, { backgroundColor: theme.colors.background }]}>
      <Navbar />
      <View style={styles.container}>
        <Text style={[styles.welcomeText, { color: theme.colors.text, fontFamily: theme.fonts.bold }]}>Welcome Back!</Text>
        <Text style={[styles.signInText, { color: theme.colors.secondary, fontFamily: theme.fonts.regular }]}>Sign in to continue</Text>
        <TextInput
          placeholder="Email Address"
          style={[styles.textInput, { borderColor: theme.colors.borderColor }]}
        />
        <TextInput
          placeholder="Password"
          style={[styles.textInput, { borderColor: theme.colors.borderColor }]}
        />
        <Text style={[styles.forgotPasswordText, { color: theme.colors.brand }]}>
          Forgot Password?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}
        >
          <Button
            title='Login'
            style={[styles.button, { backgroundColor: theme.colors.buttonBackground }]}
            textStyle={{ color: theme.colors.buttonText }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    flex: 1,
  },
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '6%',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
  },
  signInText: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 40,
  },
  textInput: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    marginBottom: 25,
    borderWidth: 1,
  },
  forgotPasswordText: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
  },
});

export default LoginScreen;
