import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ScrollViewCards from './components/ScrollViewCards';
import TrendingCard from './components/TrendingCard';
import TrendingPlaces from './components/TrendingPlaces';
import Footer from './components/Footer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{gap: 20, padding: 8}}>
        <FlatCards />
        <ScrollViewCards />
        <TrendingCard />
        <TrendingPlaces />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
