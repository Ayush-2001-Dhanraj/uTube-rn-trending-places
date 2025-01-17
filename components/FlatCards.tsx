import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from './Card';
import Heading from './Heading';

const FlatCards = () => {
  return (
    <View>
      <Heading text="Flat Cards" />
      <View style={styles.container}>
        <Card cardColor="red" text="Red" />
        <Card cardColor="yellow" text="Yellow" />
        <Card cardColor="black" text="Black" />
        <Card cardColor="yellow" text="Yellow" />
        <Card cardColor="red" text="Red" />
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: 'row',
  },
});
