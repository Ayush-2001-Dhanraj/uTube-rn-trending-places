import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>Yellow</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>Black</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  cardText: {
    color: '#fff',
  },
  card: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'yellow',
  },
  cardThree: {
    backgroundColor: 'black',
  },
  container: {
    gap: 10,
    flexDirection: 'row',
  },
});
