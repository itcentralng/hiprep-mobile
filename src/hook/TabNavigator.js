import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import TutorProfileCard from '../components/ui/TutorProfileCard';
import { MaterialIcons } from '@expo/vector-icons';
import EducationCard from '../components/ui/EducationCard';

const Overview = () => {
  const {theme} = useTheme();

  return (
  <View>
    <Text style={[styles.aboutHeader, {fontFamily: theme.fonts.bold}]}>About</Text>
    <Text style={styles.sectionText}>I've been a tutor for two years and some of my favorite things about being a tutor are: Having the opportunity to shape young minds and watch them grow into amazing individuals. Getting to learn from them and see things from a different and usually more positive point of view. I find it rewarding knowing I have helped the students learn and to use what they have learnt on their journey to a bright future.</Text>

    <View style={styles.TutorProfileCardContainer}>
        <TutorProfileCard title="No. Students" quantity={"15"} />
        <TutorProfileCard title="Sessions Taken" quantity={"40"} />
      </View>
        <TutorProfileCard title="Sessions in Munites" quantity={"1,129"} />

        <View style={styles.tables}>
          <View style={[styles.table, {borderColor: theme.colors.secondary}]}>
              <Text style={[styles.subjectHeader, {fontFamily: theme.fonts.bold, color: theme.colors.secondary}]}>Subjects</Text>
              <View style={styles.subjects}>
                  <Text style={[styles.subject, {fontFamily: theme.fonts.bold, backgroundColor: theme.colors.secondaryLight}]}>PHYSICS</Text>
                  <Text style={[styles.subject, {fontFamily: theme.fonts.bold, backgroundColor: theme.colors.secondaryLight}]}>GOVERNMENT</Text>
              </View>
          </View>

          <View style={[styles.table, {borderColor: theme.colors.secondary}]}>
              <Text style={[styles.subjectHeader, {fontFamily: theme.fonts.bold, color: theme.colors.secondary}]}>Rating</Text>
              <View style={styles.subjects}>
              <MaterialIcons name="star" size={20} color="#FD8E1F" />

                  <Text style={[styles.subject, {fontFamily: theme.fonts.bold, backgroundColor: theme.colors.black}]}>4.8</Text>
              </View>
          </View>

          <View style={[styles.table, {borderColor: theme.colors.secondary, borderBottomWidth: 1}]}>
              <Text style={[styles.subjectHeader, {fontFamily: theme.fonts.bold, color: theme.colors.secondary}]}>Experience</Text>
              <View style={styles.subjects}>
                  <Text style={[styles.subject, {fontFamily: theme.fonts.bold}]}>6 years</Text>
              </View>
          </View>
        </View>

        <EducationCard />
  </View>
  )
};

const Reviews = () => (
  <View>
    <Text style={styles.sectionText}>This is the Reviews section</Text>
    {/* Add more content here for Reviews */}
  </View>
);

const Preview = () => (
  <View>
    <Text style={styles.sectionText}>This is the Preview section</Text>
    {/* Add more content here for Preview */}
  </View>
);

function TabNavigator() {
  
  const [activeSection, setActiveSection] = useState('Overview');

  // Function to switch between sections
  const renderSection = () => {
    switch (activeSection) {
      case 'Overview':
        return <Overview />;
      case 'Reviews':
        return <Reviews />;
      case 'Preview':
        return <Preview />;
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
          <Text style={[styles.tabLabel, activeSection === 'Overview' && styles.activeTab, {fontFamily: theme.fonts.bold}]}>OVERVIEW</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveSection('Reviews')}>
          <Text style={[styles.tabLabel, activeSection === 'Reviews' && styles.activeTab, {fontFamily: theme.fonts.bold}]}>REVIEWS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveSection('Preview')}>
          <Text style={[styles.tabLabel, activeSection === 'Preview' && styles.activeTab, {fontFamily: theme.fonts.bold}]}>PREVIEW</Text>
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
    justifyContent: 'space-around',
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
  
  aboutHeader: {
    fontSize: 18
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,

  },
  TutorProfileCardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  tables: {
    marginVertical: 20
  },
  table: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    paddingVertical: 20,
  },
  subjects: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  subjectHeader: {
    fontSize: 16
  },
  subject: {
    marginLeft: 5,
    fontSize: 16,
    padding: 5,
    borderRadius: 5
  }
});

export default TabNavigator;
