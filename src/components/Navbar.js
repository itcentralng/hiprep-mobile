import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

function Navbar() {
  return (
    <View style={styles.navbarContainer}>
      <Image
        source={require('../../assets/1.svg')} 
        style={styles.logo}
      />
      <TouchableOpacity>
        <Image
          source={require('../../assets/menu.png')} 
          style={styles.hamburgerIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    width: '100%',
    height: 67,
    backgroundColor: '#0E6883',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 82,
    height: 50,
    resizeMode: 'contain',
  },

  hamburgerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Navbar;