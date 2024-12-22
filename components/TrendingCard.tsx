import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Heading from './Heading';
import PlaceCard from './PlaceCard';

const TrendingCard = () => {
  return (
    <View>
      <Heading text="A Trending Place" />
      <PlaceCard
        imageURI="https://upload.wikimedia.org/wikipedia/commons/f/f0/Bara_Imambara_Lucknow.jpg"
        title="Bara Imambara"
        location="Shrine in Lucknow, Uttar Pradesh"
        description="Bara Imambara (Hindi: बड़ा इमामबाड़ा), also known as Asafi Imambara,
          is an imambara complex in Lucknow, India, built by Asaf-ud-Daula,
          Nawab of Awadh, in 1784. Bara means big. An Imambara is a shrine built
          by Shia Muslims for the purpose of Azadari. This imambara is the
          second largest after the Nizamat Imambara."
        distance="30 mins away"
        fullWidth
      />
    </View>
  );
};

export default TrendingCard;

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
