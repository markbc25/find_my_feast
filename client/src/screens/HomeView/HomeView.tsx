import React, { FC, forwardRef, useImperativeHandle, useState, useEffect, useContext, createContext } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import CurrentSessionStorage from '../../storage/SessionStorage/SessionStorage.js'
import TinderCard from 'react-tinder-card';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Restaurant } from '../../components/PlaceCard/PlaceCard';
import preferencesAndRestaurantsInstance from '../../storage/SessionStorage/PreferencesAndRestaurants.js';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import sessionStorageInstance from '../../storage/SessionStorage/SessionStorage.js';


const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
EStyleSheet.build({ $rem: window_width / 380 });

const styles = StyleSheet.create({
  cardContainer: {

  },
  container: {
    width: window_width,
    height: window_height,
  },

})


interface HomeViewProps {
  parent: any,
}

const HomeView = forwardRef((props: HomeViewProps, ref) => {
  const [restaurantResponse, setRestaurantsChanged] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
  }, [restaurantResponse])

  async function getRestaurants() {
    try {
      let body = {
        restaurantData: {
          includedTypes: preferencesAndRestaurantsInstance.getIncludedTypes(),
          maxResultCount: 20,
          locationRestriction: {
            circle: {
              center: {
                latitude: 30.6280,
                longitude: -96.3344
              },
              radius: Math.min(50000.0, preferencesAndRestaurantsInstance.getRadius()),
            }
          },
          rankPreference: "DISTANCE",
        }, 

        userData: {
          email: sessionStorageInstance.getEmail(),
        }
      };
      let url = "http://10.0.2.2:3000/api/restaurants";

      const response = await axios.post(url, body);

      setRestaurantsChanged(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        {restaurantResponse.map((place) => (
          <PlaceCard key={place.id} restaurant={place} /> // outOfFrame={ }
        ))}

      </View>
    </SafeAreaView>
  );
});

export default HomeView;
