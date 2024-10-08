import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import Button from './ui/Button';
import PaymentMethodCard from './ui/PaymentMethodCard';

const PaymentSection = () => {
  const {theme} = useTheme()
  const [currentClass, setCurrentClass] = useState()
  return (
    <View style={styles.container}>
      <Text style={[styles.header, { fontFamily: theme.fonts.bold, color: theme.colors.text }]}>Make Payment</Text>
        <Text style={[styles.subHeader, { fontFamily: theme.fonts.regular, color: theme.colors.secondary }]}>
        How would you like to pay?
        </Text>

        <PaymentMethodCard />

       
    </View>
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
  
  
})

export default PaymentSection;
