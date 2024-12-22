import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type HeadingProps = {
  text: string;
};

const Heading = ({text}: HeadingProps) => {
  return <Text style={styles.heading}>{text}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
