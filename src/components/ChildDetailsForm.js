import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeProvider'; // Import the useTheme hook
import { MaterialIcons } from '@expo/vector-icons'; // Import the icon
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Button from '../components/ui/Button';

const ChildDetailsForm = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [currentClass, setCurrentClass] = useState('');
  const [isDifferentLocation, setIsDifferentLocation] = useState(false); // State to track checkbox status
  const { theme } = useTheme(); // Get the current theme
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const toggleCheckbox = () => setIsDifferentLocation(!isDifferentLocation);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // Format the date as needed, e.g. DD-MM-YYYY
    const formattedDate = date.toLocaleDateString('en-GB');
    setDob(formattedDate);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={[styles.header, { fontFamily: theme.fonts.bold, color: theme.colors.text }]}>Child’s Details</Text>
        <Text style={[styles.subHeader, { fontFamily: theme.fonts.regular, color: theme.colors.secondary }]}>Kindly provide basic project’s information</Text>
        
        <TouchableOpacity style={styles.addChildContainer}>
          <View style={styles.iconCircle}>
            <MaterialIcons name="add" size={16} color={theme.colors.primary} />
          </View>
          <Text style={[styles.newChildText, { fontFamily: theme.fonts.regular }]}>Add a new child</Text>
        </TouchableOpacity>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your child's name"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />

          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity  onPress={showDatePicker} style={styles.dateInputContainer}>
  <TextInput
    style={[styles.dateInput, { flex: 1 }]}
    placeholder="Enter your child's DOB (DD-MM-YYYY)"
    value={dob}
    editable={false} // Prevent manual typing
  />
  <TouchableOpacity onPress={showDatePicker} style={styles.iconContainer}>
    <MaterialIcons name="calendar-today" size={24} color={theme.colors.primary} />
  </TouchableOpacity>
</TouchableOpacity>

          {/* Date Picker Modal */}
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
            value={currentClass}
            onChangeText={(text) => setCurrentClass(text)}
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

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[styles.checkbox, {borderColor: theme.colors.secondary}]}
              onPress={toggleCheckbox}
            >
              {isDifferentLocation && <View style={styles.checkedBox} />}
            </TouchableOpacity>
            <Text style={[styles.childLocation, { fontFamily: theme.fonts.bold }]}>
              Is this child in a different location?
            </Text>
          </View>

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
          onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}
          >
          <Button 
          title='Recommend a Tutor'
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
    marginTop: 20,
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
    justifyContent: "space-between"
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
    width: 12,
    height: 12,
    backgroundColor: '#333',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#E7F0F3",
    borderRadius: 8,
    marginVertical: 5,
    paddingRight: 10, // Ensures there's space for the icon
  },
  iconContainer: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateInput: {
    padding: 16,
    borderRadius: 8,
    flex: 1, // Makes the input take up most of the space
  },
});

export default ChildDetailsForm;
