import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookingSummary = () => {
  return (
    <View style={styles.container}>
      <Text>Booking Summary Section</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

export default BookingSummary;
