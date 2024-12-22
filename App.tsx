import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ScrollViewCards from './components/ScrollViewCards';
import TrendingCard from './components/TrendingCard';
import TrendingPlaces from './components/TrendingPlaces';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{gap: 20}}>
        <FlatCards />
        <ScrollViewCards />
        <TrendingCard />
        <TrendingPlaces />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
});
