import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Heading from './Heading';
import Card from './Card';

const ScrollViewCards = () => {
  return (
    <View>
      <Heading text="Scroll View Cards" />
      <ScrollView horizontal contentContainerStyle={{gap: 10}}>
        <Card cardColor="red" text="Red" />
        <Card cardColor="yellow" text="Yellow" />
        <Card cardColor="black" text="Black" />
        <Card cardColor="yellow" text="Yellow" />
        <Card cardColor="red" text="Red" />
      </ScrollView>
    </View>
  );
};

export default ScrollViewCards;

const styles = StyleSheet.create({});
