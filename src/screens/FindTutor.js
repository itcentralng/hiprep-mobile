import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/Navbar';
import { useTheme } from '../theme/ThemeProvider';
import ToggleSection from '../components/ToggleSection';
import ChildDetailsForm from '../components/ChildDetailsForm';
import BookingSummary from '../components/BookingSummary';
import PaymentSection from '../components/PaymentSection';

function FindTutor({navigation}) {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState('Child Details');

  const renderSection = () => {
    switch (activeSection) {
      case 'Child Details':
        return <ChildDetailsForm />;
      case 'Booking Summary':
        return <BookingSummary />;
      case 'Payment':
        return <PaymentSection />;
      default:
        return <ChildDetailsForm />;
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
      <Navbar />
      <View style={styles.container}>
        <Text style={[styles.findTutorText, { fontFamily: theme.fonts.bold, color: theme.colors.text }]}>
          Find a Tutor
        </Text>
        {/* Pass the activeSection and setActiveSection to ToggleSection */}
        <ToggleSection activeSection={activeSection} setActiveSection={setActiveSection} />
        {/* Render the form based on the selected section */}
      </View>
        {renderSection()}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#fff"
    },
  container: {
    backgroundColor: '#FFF7FA',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  findTutorText: {
    fontSize: 24,
  },
});

export default FindTutor;
