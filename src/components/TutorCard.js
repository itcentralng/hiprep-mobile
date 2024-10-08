import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import TabNavigator from '../hook/TabNavigator';  



function TutorCard() {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/tutor1.png")}
        style={styles.profilePicture}
      />
      <Text style={[styles.name, { fontFamily: theme.fonts.bold, color: theme.colors.black }]}>
        Ann Donin
      </Text>
      <Text style={[styles.subjects, { fontFamily: theme.fonts.bold, color: theme.colors.secondary }]}>
        Government & Physics Teacher
      </Text>

      
      <TabNavigator />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 32,
    paddingHorizontal: 16,
    marginVertical: 30,
    borderRadius: 8,
    width: "90%",
  },
  profilePicture: {
    width: 295,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
  },
  subjects: {
    fontSize: 16,
    marginBottom: 15,

  },
  
});

export default TutorCard;
