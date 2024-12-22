import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Footer = () => {
  const handlePressDeveloper = () =>
    Linking.openURL('https://github.com/Ayush-2001-Dhanraj');

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={handlePressDeveloper}>
        <Text style={styles.footerText}>Ayush Dhanraj</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'red',
    padding: 8,
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
  },
});
