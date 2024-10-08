import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import ChildDetailCard from './ui/ChildDetailCard';
import Button from './ui/Button';
import { MaterialIcons } from '@expo/vector-icons';
import TutorSmallCardRecommendation from './ui/TutorSmallCardRecommendation';
import { useNavigation } from '@react-navigation/native';

const BookingSummary = () => {
  const {theme} = useTheme()
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.header, { fontFamily: theme.fonts.bold, color: theme.colors.text }]}>Booking Summary</Text>
        <Text style={[styles.subHeader, { fontFamily: theme.fonts.regular, color: theme.colors.secondary }]}>
          Kild's booking summary
        </Text>
        <ChildDetailCard />

        <View style={styles.recommendationHeader}>
          <Text style={[styles.recommendationText, {fontFamily: theme.fonts.bold, color: theme.colors.black}]}>Recommended Tutors</Text>
          <View style={styles.iconContainer}>
          <MaterialIcons name="arrow-forward" size={20} color={theme.colors.primary} />
          </View>
        </View>

        <TutorSmallCardRecommendation />

        <TouchableOpacity
        style={styles.buttonContainer}
          onPress={() => navigation.navigate('FindTutor', { activeSection: 'Payment' })}
        >
          <Button
            title='Make Payment'
            style={[styles.button, { backgroundColor: theme.colors.buttonBackground }]}
            textStyle={{ color: theme.colors.buttonText }}
          />
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  header: {
    fontSize: 20,
  },
  subHeader: {
    fontSize: 14,
  },
  buttonContainer: {
    marginVertical: 20
  },
  recommendationHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 5
  },
  recommendationText: {
    fontSize: 16
  },
  iconContainer: {
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#E7F0F3",
  }
})

export default BookingSummary;
