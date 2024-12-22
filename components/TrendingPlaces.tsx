import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Heading from './Heading';
import PlaceCard from './PlaceCard';

const TrendingPlaces = () => {
  return (
    <View>
      <Heading text="Trending Places" />
      <ScrollView horizontal contentContainerStyle={{gap: 10}}>
        <PlaceCard
          imageURI="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0psRB-MR3qkNkH0jAcanG01ETkJdk2Gixknkm03Fl-IIJeVxFnXF0ci1GyMiFvQc7Z4U"
          title="Nawab Wajid Ali Shah Prani Udyan"
          location="Lucknow, Uttar Pradesh, India"
          description="JNawab Wajid Ali Shah Prani Udyan, earlier known as Prince of Wales Zoological Gardens or popularly known as Lucknow Zoological Garden (Urdu: Lakhnaū Chiṛiyāghara), and Banaarsi Baag, is a 71.6-acre (29.0 ha) zoo located in the heart of the capital city of Uttar Pradesh named after Wajid Ali Shah - the last Nawab of Awadh. According to the Central Zoo Authority of India, it is a large zoo."
          distance="15 mins away"
        />
        <PlaceCard
          imageURI="https://jawalaji.in/wp-content/uploads/2015/09/hqdefault.jpg"
          title="Jwala Devi Temple"
          location="Shaktinagar, Uttar Pradesh"
          description="Jwaladevi Temple (ज्वालादेवी मन्दिर) is located in Shaktinagar which is in Sonbhadra district of Uttar Pradesh. The Jwaladevi temple is dedicated to Goddess Jwala Ji . This is an age old Ashtagrih temple of Jwala Devi & one of the 51 Shakta pithas of India. The old temple is believed to be 1000 years old. The old temple was constructed by Raja Udit Narayan Singh of singrauli Gaharwal village."
          distance="75 mins away"
        />
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
        />
      </ScrollView>
    </View>
  );
};

export default TrendingPlaces;

const styles = StyleSheet.create({});
