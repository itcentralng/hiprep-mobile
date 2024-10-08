import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleSection = ({ activeSection, setActiveSection }) => {
  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={styles.toggleOption}
        onPress={() => setActiveSection('Child Details')}
      >
        <View style={[styles.circle, activeSection === 'Child Details' && styles.activeCircle]} />
        <Text style={activeSection === 'Child Details' ? styles.activeText : styles.text}>Child's Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.toggleOption}
        onPress={() => setActiveSection('Booking Summary')}
      >
        <View style={[styles.circle, activeSection === 'Booking Summary' && styles.activeCircle]} />
        <Text style={activeSection === 'Booking Summary' ? styles.activeText : styles.text}>Booking Summary</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.toggleOption}
        onPress={() => setActiveSection('Payment')}
      >
        <View style={[styles.circle, activeSection === 'Payment' && styles.activeCircle]} />
        <Text style={activeSection === 'Payment' ? styles.activeText : styles.text}>Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF7FA',
    marginVertical: 10,
  },
  toggleOption: {
    alignItems: 'center',
    flex: 1,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#D3D3D3', 
    marginBottom: 5,
  },
  activeCircle: {
    borderColor: '#0E6883', 
  },
  text: {
    fontSize: 10,
    color: '#888888',
  },
  activeText: {
    fontSize: 10,
    color: '#0E6883',
    fontWeight: 'bold',
  },
});

export default ToggleSection;
