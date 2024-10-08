import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from '../components/Navbar';
import { useTheme } from '../theme/ThemeProvider';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function PaymentInfo() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/Tutor_Child2 1.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.text1Container}>
          <Text style={[styles.text1, { fontFamily: theme.fonts.bold }]}>
          We have collected your information.
          </Text>
          
        </View>
        <View style={styles.text2Container}>
          <Text style={[styles.text2, { fontFamily: theme.fonts.regular }]}>
          We will provide you with personalized tutor recommendations based on your request.
          </Text>
          
        </View>
        
      <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}
      >
        <Text style={[styles.buttonText, { fontFamily: theme.fonts.bold, color: theme.colors.brand}]}>Go Home</Text>
      <MaterialIcons name="arrow-forward" size={24} color={theme.colors.brand} />

      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: '#FFF7FA',
    paddingTop: 150,
  },
  image: {
    width: 290,
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
  },
  text1Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  text2Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 16,
    width: "50%",
    textAlign: "center"
  },
  loader: {
    marginLeft: 5,
    width: 24, 
    height: 24, 
  },
  checkIcon: {
    marginLeft: 5,
    width: 24, 
    height: 24, 
  },
  text2: {
    fontSize: 14,
    textAlign: "center"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  buttonText: {
    fontSize: 16,
    marginRight: 5
  }
});

export default PaymentInfo;
