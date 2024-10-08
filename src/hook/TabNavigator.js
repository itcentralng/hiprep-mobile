import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import TutorProfileCard from '../components/ui/TutorProfileCard';
import { MaterialIcons } from '@expo/vector-icons';
import EducationCard from '../components/ui/EducationCard';
import { Image } from 'react-native';
import { WebView } from 'react-native-webview';

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

const Reviews = () => {
  const {theme} = useTheme();

  const reviews  = [
    {
      id: 1,
      profileImage: require("../../assets/Image.png"),
      name: "Cheyenne Rhiel Madsen",
      date: "1 week ago",
      reviewText: "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako."
    },
    {
      id: 2,
      profileImage: require("../../assets/Image.png"),
      name: "Cheyenne Rhiel Madsen",
      date: "1 week ago",
      reviewText: "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako."
    },
  ]

  return (

  <View>
    <Text style={[styles.sectionTitle, {fontFamily: theme.fonts.bold}]}>Studnet's Reviews</Text>
    {reviews.map((review, index) => (
      <View key={index}>
    <View style={styles.top}>
      <Image source={review.profileImage} />
      <View style={styles.studentDetails}>
        <Text style={[styles.name, {fontFamily: theme.fonts.bold}]}>{review.name}</Text>
        <View style={styles.iconContainer}>
        <MaterialIcons name="star" size={20} color="#FD8E1F" />
        <MaterialIcons name="star" size={20} color="#FD8E1F" />
        <MaterialIcons name="star" size={20} color="#FD8E1F" />
        <MaterialIcons name="star" size={20} color="#FD8E1F" />
        <MaterialIcons name="star" size={20} color="#FD8E1F" />
        </View>
      </View>
      <Text style={[styles.date, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>{review.date}</Text>
    </View>
    <View style={styles.reviewContainer}>
      <Text style={[styles.reviewText, {fontFamily: theme.fonts.regular, color: theme.colors.secondary}]}>{review.reviewText}</Text>
    </View>
    </View>
    ))}
  </View>
);
}

const Preview = () => {
  const {theme} = useTheme();
  return (
    <View style={styles.previewContainer}>
          <Text style={[styles.sectionTitle, {fontFamily: theme.fonts.bold, marginBottom: 20}]}>Tutor's Reviews</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: 'https://youtu.be/Jd5_KjkyljY?autoplay=0' }}
      />
    </View>
  );
};

function TabNavigator() {
  
  const [activeSection, setActiveSection] = useState('Overview');

  
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
  },
  sectionTitle: {
    fontSize: 16
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 20
  },
  name: {
    fontSize: 14
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  date: {
    fontSize: 12
  },
  reviewContainer: {
    marginVertical: 12
  },
  reviewText: {
    fontSize: 14
  },
  previewContainer: {
    flex: 1,
  },
  sectionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  video: {
    height: 200, 
    borderRadius: 8,
    overflow: 'hidden',
  },
  
});

export default TabNavigator;
