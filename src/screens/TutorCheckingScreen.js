import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/Navbar';
import { useTheme } from '../theme/ThemeProvider'; // Import the useTheme hook

function TutorCheckingScreen() {
  const { theme } = useTheme();
  const rotateAnim = useRef(new Animated.Value(0)).current; // Create a reference for the animated value

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
          <Animated.Image
            source={require('../../assets/Loader.png')}
            style={[styles.loader, { transform: [{ rotate }] }]} // Apply the rotation animation
          />
        </View>
        <Text style={[styles.text2, { fontFamily: theme.fonts.regular }]}>
          Searching our tutor’s directory
        </Text>
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
  text1: {
    fontSize: 16,
  },
  loader: {
    marginLeft: 5,
    width: 24, // Adjust size as necessary
    height: 24, // Adjust size as necessary
  },
  text2: {
    fontSize: 14,
  },
});

export default TutorCheckingScreen;
