import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/Navbar';
import { useTheme } from '../theme/ThemeProvider';
import { MaterialIcons } from '@expo/vector-icons';

function TutorCheckingScreen() {
  const { theme } = useTheme();
  const rotateAnim = useRef(new Animated.Value(0)).current; // Create a reference for the animated value

  const [loadingStep, setLoadingStep] = useState(1); // State to track which step we're on

  // Create the rotation animation
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000, // Rotation duration
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);

  // Interpolate the animated value to create a rotation effect
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Rotate from 0 to 360 degrees
  });

  // Handle the timing for loading steps
  useEffect(() => {
    const timeout1 = setTimeout(() => setLoadingStep(2), 2000); // After 2 seconds, move to "Searching our tutor’s directory"
    const timeout2 = setTimeout(() => setLoadingStep(3), 4000); // After 4 seconds, complete the process
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

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
            Checking children’s information
          </Text>
          {loadingStep === 1 ? (
            <Animated.Image
              source={require('../../assets/Loader.png')}
              style={[styles.loader, { transform: [{ rotate }] }]} // Apply the rotation animation
            />
          ) : (
            <MaterialIcons name="check" size={18} color={theme.colors.primary} />
          )}
        </View>
        <View style={styles.text2Container}>
          <Text style={[styles.text2, { fontFamily: theme.fonts.regular }]}>
            Searching our tutor’s directory
          </Text>
          {loadingStep === 2 && (
            <Animated.Image
              source={require('../../assets/Loader.png')}
              style={[styles.loader, { transform: [{ rotate }] }]} // Apply the rotation animation
            />
          )}
        </View>
        <Text style={[styles.text2, { fontFamily: theme.fonts.regular }]}>
          Pairing you with recommended tutors
        </Text>
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
  },
  text2Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 16,
  },
  loader: {
    marginLeft: 5,
    width: 24, // Adjust size as necessary
    height: 24, // Adjust size as necessary
  },
  checkIcon: {
    marginLeft: 5,
    width: 24, // Adjust size as necessary
    height: 24, // Adjust size as necessary
  },
  text2: {
    fontSize: 14,
  },
});

export default TutorCheckingScreen;
