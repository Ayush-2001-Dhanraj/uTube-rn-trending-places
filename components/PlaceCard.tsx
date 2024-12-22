import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

type PlaceCardProps = {
  imageURI: string;
  title: string;
  location: string;
  description: string;
  distance: string;
  fullWidth?: boolean;
};

const PlaceCard = ({
  imageURI,
  title,
  location,
  description,
  distance,
  fullWidth,
}: PlaceCardProps) => {
  return (
    <View style={[styles.cardContainer, {width: !fullWidth ? 350 : '100%'}]}>
      <Image source={{uri: imageURI}} style={styles.image} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardLocation}>{location}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <Text style={styles.cardDistance}>{distance}</Text>
    </View>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  image: {height: 200, borderRadius: 8, margin: 8},
  cardTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardLocation: {
    textAlign: 'center',
    fontSize: 12,
  },
  cardDescription: {
    marginVertical: 8,
    textAlign: 'justify',
    flexGrow: 1,
  },
  cardDistance: {
    textAlign: 'right',
    fontSize: 12,
  },
  cardContainer: {
    padding: 8,
    borderWidth: 4,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#fff',
  },
});
