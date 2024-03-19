import React, { useState } from 'react'
import { Button, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import TinderCard from 'react-tinder-card';
import Heart from '../../../assets/heart.png';
import Cancel from '../../../assets/cancel.png';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: '100%',
    maxWidth: 760,
    height: 800,
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: 800,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  overlay: {
    padding: 40, 
    height: '100%', 
    backgroundColor: 'rgba(52, 52, 52, 0.60)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 32, 
    color: '#fff',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 18, 
    color: '#fff',
    marginBottom: 5
  },
  row: {
    display: 'flex',
    gap: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 30,
    alignSelf: 'flex-end'
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'rgba(52, 52, 52, 0.80)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 35,
    height: 35,
    objectFit: 'contain',
  }
});

const db = [
  {
    name: 'McDonalds',
    img: require('../../../assets/test.jpg'),
    price: 1,
    distance: 2,
  },
  {
    name: 'Olive Garden',
    img: require('../../../assets/test.jpg'),
    price: 2,
    distance: 4,
  },
  {
    name: 'Nam Cafe',
    img: require('../../../assets/test.jpg'),
    price: 2,
    distance: 1,
  },
  {
    name: '1860',
    img: require('../../../assets/test.jpg'),
    price: 3,
    distance: 10,
  },
]

const PlaceCard: React.FC = () => {
  const restaurants = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction: any, nameToDelete: string) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  }

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!');
  }

  const getDollarSigns = (price: number) => {
    if (price === 1) return '$'
    else if (price === 2) return '$$'
    else return '$$$'
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {restaurants.map((restaurant) =>
          <TinderCard key={restaurant.name} onSwipe={(dir) => swiped(dir, restaurant.name)} onCardLeftScreen={() => outOfFrame(restaurant.name)}>
            <View style={styles.card}>
              <ImageBackground style = {styles.cardImage} source={restaurant.img}>
                <View style={styles.overlay}>
                  <View>
                    <Text style={styles.cardTitle}>{restaurant.name}</Text>
                    <View style={styles.row}>
                      <Image source={require('../../../assets/car.png')} />
                      <Text style={styles.infoText}>{restaurant.distance} mi</Text>
                    </View>
                    <Text style={styles.infoText}>{getDollarSigns(restaurant.price)}</Text>
                  </View>
                  <View style={styles.buttonRow}>
                    <Pressable
                      onPressIn={() => {}} 
                      onPressOut={() => {}} 
                      style={({ pressed }) => [
                        styles.button,
                        {
                          backgroundColor: pressed ? 'rgba(52, 52, 52, 0.95)' : 'rgba(52, 52, 52, 0.80)', 
                        }
                      ]}
                    >
                      <Image style={styles.img} source={Heart}/>
                    </Pressable>
                    <Pressable
                      onPressIn={() => {console.log("mornin");}} 
                      onPressOut={() => {}} 
                      style={({ pressed }) => [
                        styles.button,
                        {
                          backgroundColor: pressed ? 'rgba(52, 52, 52, 0.95)' : 'rgba(52, 52, 52, 0.80)', 
                        }
                      ]}
                    >
                      <Image style={styles.img} source={Cancel}/>
                    </Pressable>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TinderCard>
        )}
      </View>
    </View>
  )
}

export default PlaceCard;