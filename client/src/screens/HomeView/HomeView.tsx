import React, { FC, forwardRef, useImperativeHandle, useState, useEffect, useContext, createContext} from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import CurrentSessionStorage from '../../storage/SessionStorage/SessionStorage.js'
import TinderCard from 'react-tinder-card';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Restaurant } from '../../components/PlaceCard/PlaceCard';
import preferencesAndRestaurantsInstance from '../../storage/SessionStorage/PreferencesAndRestaurants.js';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const db = [
  {
    id: 0,
    name: 'McDonalds',
    img: require('../../../assets/test.jpg'),
    price: 1,
    distance: 2,
    rating: 3.5,
    type: 'Burger'
  },
  {
    id: 1,
    name: 'Olive Garden',
    img: require('../../../assets/test.jpg'),
    price: 2,
    distance: 4,
    rating: 4.2,
    type: 'Italian'
  },
  {
    id: 2,
    name: 'Nam Cafe',
    img: require('../../../assets/test.jpg'),
    price: 2,
    distance: 1,
    rating: 3.2,
    type: 'Vietnamese'
  },
  {
    id: 3,
    name: '1860 Italia',
    img: require('../../../assets/test.jpg'),
    price: 3,
    distance: 10,
    rating: 3.6,
    type: 'Italian'
  },
];

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
EStyleSheet.build({ $rem: window_width / 380 });

const styles = StyleSheet.create({
  cardContainer: {
  },
  container: {
    width: window_width,
    height: window_height
  },
})


interface HomeViewProps {
  parent: any,
}

const HomeView = forwardRef((props: HomeViewProps, ref) => {
  const [restaurantResponse, setRestaurantsChanged] = useState([{}]);

  const numCardsOnDeck = createContext(0);

  const updateRestaurantCards = () => {
    // Logic to be executed in response to the parent component's action
    getRestaurants();
  };

  useImperativeHandle(ref, () => ({
    updateRestaurantCards
  }));

  useEffect(() => {
    updateRestaurantCards();
  }, [])

  async function getRestaurants() {
    try {
      let body = {
        includedTypes: preferencesAndRestaurantsInstance.getIncludedTypes(),
        maxResultCount: 15,
        locationRestriction: {
          circle: {
            center: {
              latitude: 30.601389,
              longitude: -96.314445
            },
            radius: 5000
          }
        },
        rankPreference: "DISTANCE",
        // minPrice: preferencesAndRestaurantsInstance.getMinPrice(),
        // maxPrice: preferencesAndRestaurantsInstance.getMaxPrice(),
      };
      let url = "http://10.0.2.2:3000/api/restaurants";

      const response = await axios.post(url, body);

      const extractedPlaces = response.data.places.map(place => {
        const {
          id,
          types,
          location,
          rating,
          websiteUri,
          regularOpeningHours,
          priceLevel,
          displayName,
          primaryTypeDisplayName,
          photos,
          photoUri
        } = place;
        return {
          id,
          types,
          location,
          rating,
          websiteUri,
          regularOpeningHours,
          priceLevel,
          displayName,
          primaryTypeDisplayName,
          photos,
          photoUri
        };
      });

      setRestaurantsChanged(response.data.places);
      //console.log("restaurants:", (restaurantResponse));
      return response;

      if (response.status !== 200) {
        throw new Error("HTTP error " + response.status);
      }
     
      const data = response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>

        {restaurantResponse.map((place) => (
          place && <PlaceCard key={place.id} restaurant={place} /> // outOfFrame={ }

          //   <View key = {place.id}>
          //     <Text> {place.displayName.text}</Text>
          //  </View>
        ))}

      </View>
    </SafeAreaView>
  );
});

export default HomeView;
