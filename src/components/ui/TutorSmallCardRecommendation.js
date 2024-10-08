import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../theme/ThemeProvider'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function TutorSmallCardRecommendation() {
    const {theme} = useTheme();
    const navigation = useNavigation();


    const recommendedTutors = [
        {
            image: require("../../../assets/r_tutor1.png"),
            name: "Allison Botosh",
            title: "K12 Science Teacher",
            rateNumber: 5.0,
            subjectName: "Mathematics"
        },
        {
            image: require("../../../assets/r_tutor2.png"),
            name: "Rayna Dokidis",
            title: "Fine Arts Teacher",
            rateNumber: 5.0,
            subjectName: "Fine Arts"
        },
        {
            image: require("../../../assets/r_tutor3.png"),
            name: "Jaydon Levin",
            title: "English Language Teacher",
            rateNumber: 4.8,
            subjectName: "English Language"
        },
    ] 
  return (
    <View style={styles.container}>
        {recommendedTutors.map((tutor, index) => (
            <TouchableOpacity key={index} style={styles.tutorCard} onPress={() => navigation.navigate("TutorProfile")}>
        
      <View style={styles.profileImage}>
        <Image source={tutor.image} />
      </View>
      <View style={styles.profileDetails}>
        <Text style={[styles.name, {fontFamily: theme.fonts.bold}]}>{tutor.name}</Text>
        <Text style={[styles.title, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>{tutor.title}</Text>
        <View style={styles.rating}>
              <MaterialIcons name="star" size={11} color="#FD8E1F" />

                  <Text style={[styles.rateNumber, {fontFamily: theme.fonts.bold}]}>{tutor.rateNumber}</Text>
              </View>
      </View>
      <View style={styles.subject}>
  <Text 
    style={[styles.subjectName, {fontFamily: theme.fonts.bold}]}
    numberOfLines={1} 
    ellipsizeMode="tail" 
  >
    {tutor.subjectName}
  </Text>
  <MaterialIcons name="verified" size={13} color="#2F9461" />
</View>
</TouchableOpacity>
))}
    </View>
  )
}

const styles = StyleSheet.create({
    tutorCard: {
        padding: 16,
        borderWidth: 1,
        borderColor: "#E7F0F3",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10

    },
    name: {
        fontSize: 14,
    },
    title: {
        fontSize: 11
    },
    rating: {
        display: "flex",
    flexDirection: "row",
    alignItems: "center"
    },
    rateNumber: {
        fontSize: 11
    },
    subject: {
        backgroundColor: "#D9F9E6",
        padding: 8,
        borderRadius: 8,
            display: "flex",
        flexDirection: "row",
        alignItems: "center"
    
    },
    subjectName: {
        fontSize: 11,
        color: "#2F9461",
        marginRight: 5,
        maxWidth: 85
    },
    


})

export default TutorSmallCardRecommendation
