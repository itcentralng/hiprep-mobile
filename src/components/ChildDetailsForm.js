import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Button from '../components/ui/Button';
import { useNavigation } from '@react-navigation/native';

const ChildDetailsForm = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  
  const [children, setChildren] = useState([{ fullName: '', dob: '', currentClass: '', subjects: '' }]);
  const [activeChildIndex, setActiveChildIndex] = useState(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [currentClass, setCurrentClass] = useState('');
  const [isDifferentLocation, setIsDifferentLocation] = useState(false);
  const [showTabBar, setShowTabBar] = useState(false);
  const [fullName, setFullName] = useState('');


  const toggleCheckbox = () => setIsDifferentLocation(!isDifferentLocation);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

 const handleConfirm = (date) => {
  const formattedDate = date.toLocaleDateString('en-GB');
  updateChildData('dob', formattedDate); 
  hideDatePicker();
};


  
  const updateChildData = (field, value) => {
    const updatedChildren = [...children];
    updatedChildren[activeChildIndex] = { ...updatedChildren[activeChildIndex], [field]: value };
    setChildren(updatedChildren);
  };

  
  const addNewChild = () => {
    setChildren([...children, { fullName: '', dob: '', currentClass: '', subjects: '' }]);
    setActiveChildIndex(children.length);
    setShowTabBar(true);
  };

  const handleRecommendation = () => {
    
    navigation.navigate('TutorChecking');

    
    setTimeout(() => {
        navigation.navigate('FindTutor', { activeSection: 'Booking Summary' });
    }, 4000);
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={[styles.header, { fontFamily: theme.fonts.bold, color: theme.colors.text }]}>Child’s Details</Text>
        <Text style={[styles.subHeader, { fontFamily: theme.fonts.regular, color: theme.colors.secondary }]}>
          Kindly provide basic information for each child
        </Text>

        <TouchableOpacity style={styles.addChildContainer} onPress={addNewChild}>
          <View style={styles.iconCircle}>
            <MaterialIcons name="add" size={16} color={theme.colors.primary} />
          </View>
          <Text style={[styles.newChildText, { fontFamily: theme.fonts.regular }]}>Add a new child</Text>
        </TouchableOpacity>


        {showTabBar && (
          <View style={styles.tabBar}>
            {children.map((child, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.tab, activeChildIndex === index && styles.activeTab]}
                onPress={() => setActiveChildIndex(index)}
              >
                <Text style={[styles.tabText, {fontFamily: theme.fonts.bold}, activeChildIndex === index && styles.activeTabText]}>
                  {child.fullName || `Child ${index + 1}`}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your child's name"
            value={children[activeChildIndex].fullName}
            onChangeText={(text) => updateChildData('fullName', text)}
          />

          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity onPress={showDatePicker} style={styles.dateInputContainer}>
            <TextInput
              style={[styles.dateInput, { flex: 1 }]}
              placeholder="Enter your child's DOB (DD-MM-YYYY)"
              value={children[activeChildIndex].dob}
              editable={false}
            />
            <TouchableOpacity onPress={showDatePicker} style={styles.iconContainer}>
              <MaterialIcons name="calendar-today" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          </TouchableOpacity>

          {}
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <Text style={styles.label}>Current Class</Text>
          <TextInput
            style={styles.input}
            placeholder="Select your child's class"
            value={children[activeChildIndex].currentClass}
            onChangeText={(text) => updateChildData('currentClass', text)}
          />

          <Text style={styles.label}>Subjects</Text>
          <TextInput
          style={styles.input}
          placeholder="Enter your child's subjects"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        
          <View style={styles.availabilityContainer}>
  <Text style={[styles.header, { fontFamily: theme.fonts.bold, color: theme.colors.text }]}>Child’s Availability</Text>
  <TouchableOpacity style={styles.addChildContainer}>
          <View style={styles.iconCircle}>
            <MaterialIcons name="add" size={16} color={theme.colors.primary} />
          </View>
          <Text style={[styles.newChildText, { fontFamily: theme.fonts.regular }]}>Add Availability</Text>
        </TouchableOpacity>
  </View>

        <TextInput
          style={styles.input}
          placeholder="Select day of the Week"
          value={currentClass}
          onChangeText={(text) => setCurrentClass(text)}
        />
        <View style={styles.daySelectionContainer}>
          <TextInput
            style={[styles.input, {width: "45%"}]}
            placeholder="From"
            value={currentClass}
            onChangeText={(text) => setCurrentClass(text)}
          />
          <TextInput
            style={[styles.input, {width: "45%"}]}
            placeholder="To"
            value={currentClass}
            onChangeText={(text) => setCurrentClass(text)}
          />
        </View>

          <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[styles.checkbox, {borderColor: theme.colors.secondary}]}
              onPress={toggleCheckbox}
            >

              {isDifferentLocation &&
              <View style={[styles.checkedBox, {backgroundColor: theme.colors.brand}]}>
              <MaterialIcons name="check" size={16} color="#fff" />

                </View>}
            </TouchableOpacity>
            <Text style={[styles.childLocation, { fontFamily: theme.fonts.bold }]}>
              Is this child in a different location?
            </Text>
          </TouchableOpacity>

          {isDifferentLocation == true ?

            <View>
              <View>
              <Text style={styles.label}>Country of Residence</Text>
              <TextInput
          style={styles.input}
          placeholder="Select your country"
          value={currentClass}
          onChangeText={(text) => setCurrentClass(text)}
        />
              </View>
            
        <View style={styles.daySelectionContainer}>
          <View style={{width: "45%"}}>
          <Text style={styles.label}>State</Text>
          <TextInput
            style={styles.input}
            placeholder="Select your state"
            value={currentClass}
            onChangeText={(text) => setCurrentClass(text)}
          />
          </View>
          <View style={{width: "45%"}}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="Your City"
            value={currentClass}
            onChangeText={(text) => setCurrentClass(text)}
          />
          </View>
        </View>
            </View>

          :
          null
        }
          
          <TouchableOpacity
            onPress={handleRecommendation}
          >
          <Button
            title='Recommend a Tutor'
            style={[styles.button, { backgroundColor: theme.colors.buttonBackground }]}
            textStyle={{ color: theme.colors.buttonText }}
          />
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
  },
  subHeader: {
    fontSize: 14,
  },
  tabBar: {
    flexDirection: 'row',
    marginVertical: 10
  },
  tab: {
    padding: 10,
    borderBottomWidth: 4,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#0E6883',
  },
  tabText: {
    fontSize: 14,
    color: '#7F8C9F',
  },
  activeTabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0E6883',
  },
  addChildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E7F0F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  newChildText: {
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  formContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "#E7F0F3",
    padding: 16,
    borderRadius: 8,
    width: "100%",
    marginVertical: 5
  },
  childLocation: {
    fontSize: 14,
    marginLeft: 5
  },
  availabilityContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  daySelectionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 3,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    borderRadius: 3,
    borderWidth: 0,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#E7F0F3",
    borderRadius: 8,
    marginVertical: 5,
    paddingRight: 10, 
  },
  iconContainer: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateInput: {
    padding: 16,
    borderRadius: 8,
    flex: 1,
    color: "#000"
  },
});

export default ChildDetailsForm;
