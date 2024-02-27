import React, { FC } from 'react';
import {StyleSheet, View} from 'react-native';
import ListEntry from '../../components/ListEntry/ListEntry';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
});

const db = [
  {
    id: 0,
    name: 'McDonalds',
    img: '../../../assets/test.jpg',
    price: 1,
    distance: 2,
  },
  {
    id: 1,
    name: 'Olive Garden',
    img: '../../../assets/test.jpg',
    price: 2,
    distance: 4,
  },
  {
    id: 2,
    name: 'Nam Cafe',
    img: '../../../assets/test.jpg',
    price: 2,
    distance: 1,
  },
  {
    id: 3,
    name: '1860',
    img: '../../../assets/test.jpg',
    price: 3,
    distance: 10,
  },
]

const Favorites: FC = () => {
  const restaurants = db;
  return (
    <View style={styles.container}>
        {restaurants.map((restaurant) => 
        <ListEntry restaurant={restaurant} key={restaurant.id}/>
        )}
    </View>
  );

};

export default Favorites;
