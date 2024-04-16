import React, { FC, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ListEntry from '../../components/ListEntry/ListEntry';
import axios from 'axios';
import sessionStorageInstance from '../../storage/SessionStorage/SessionStorage';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },
});

const Favorites: FC = ({ navigation }) => {
  // const restaurants = db;
  const [restaurants, setRestaurants] = useState([]);

  async function fetchFavorites() {
    const url = "http://10.0.2.2:3000/api/users/favorites/";

    const response = await axios.get(url, {
      params: {
        email: sessionStorageInstance.getEmail(),
      }
    });

    setRestaurants(response.data.favoriteRestaurant);
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchFavorites();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (

    <ScrollView style={styles.centeredView}>
      {restaurants.length > 0 && restaurants.map((place) =>
        place && place.displayName ? <ListEntry list={"f"} restaurant={place} key={place.id}/> : <View/>
      )}
    </ScrollView>
  );
}

export default Favorites;
