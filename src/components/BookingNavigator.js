import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import TutorProfileCard from '../components/ui/TutorProfileCard';
import { MaterialIcons } from '@expo/vector-icons';
import EducationCard from '../components/ui/EducationCard';
import BookingCard from './ui/BookingCard';
import NotFound from './NotFound';
import PaymentHistory from './PaymentHistory';

const Overview = () => {
  const {theme} = useTheme();

  return (
  <View>
    <View style={[styles.headerContainer, {backgroundColor: theme.colors.primary}]}>
      <Text style={[styles.headerText, {fontFamily: theme.fonts.bold}]}>Bookings</Text>
    </View>
    <BookingCard name="James" date="1st - 31st Dec. 2023" day="Friday" time="11:00am - 1:00pm" subject="Basic Science" progress="Completed" />
    <BookingCard name="Maria" date="1st - 30th Nov. 2023" day="Sunday" time="11:00am - 1:00pm" subject="Mathematics" progress="Active" />
    <BookingCard name="Rayna" date="1st - 31st Aug. 2023" day="Monday" time="11:00am - 1:00pm" subject="English Language" progress="Canceled" />
    <BookingCard name="Kianna" date="1st - 30th Jun. 2023" day="Monday" time="11:00am - 1:00pm" subject="Mathematics" progress="Completed" />
  </View>
  )
};

const Reviews = () => {
  const {theme} = useTheme()
  return (
  <View>
    {/* <NotFound /> */}
    <View style={[styles.headerContainer, {backgroundColor: theme.colors.primary}]}>
      <Text style={[styles.headerText, {fontFamily: theme.fonts.bold}]}>Payments</Text>
    </View>
    <PaymentHistory />
  </View>
)
};


function BookingNavigator() {
  
  const [activeSection, setActiveSection] = useState('Overview');

  // Function to switch between sections
  const renderSection = () => {
    switch (activeSection) {
      case 'Overview':
        return <Overview />;
      case 'Reviews':
        return <Reviews />;
      default:
        return <Overview />;
    }
  };
  const {theme} = useTheme();

  return (
    <View>
      {/* Render the tab labels */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveSection('Overview')}>
          <Text style={[styles.tabLabel, activeSection === 'Overview' && styles.activeTab, {fontFamily: theme.fonts.bold}]}>UPCOMING</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveSection('Reviews')}>
          <Text style={[styles.tabLabel, activeSection === 'Reviews' && styles.activeTab, {fontFamily: theme.fonts.bold}]}>HISTORY</Text>
        </TouchableOpacity>
       
      </View>

      {/* Render the active section's content */}
      <View style={styles.sectionContainer}>
        {renderSection()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: '#E7F0F3',
    marginBottom: 16,
  },
  tabLabel: {
    paddingVertical: 10,
    fontSize: 16,
    color: '#7F8C9F',
    marginRight: 30
  },
  activeTab: {
    color: '#0E6883',
    borderBottomWidth: 3,
    borderBottomColor: '#0E6883',
  },

  headerContainer: {
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  
  headerText: {
    fontSize: 16,
    color: "#fff"
  }
});

export default BookingNavigator;
