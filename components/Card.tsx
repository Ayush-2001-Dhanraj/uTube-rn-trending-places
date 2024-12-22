import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type CardProps = {
  cardColor: string;
  text: string;
};

const Card = ({cardColor, text}: CardProps) => {
  return (
    <View style={[styles.card, {backgroundColor: cardColor || '#000'}]}>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cardText: {
    color: '#fff',
  },
});
