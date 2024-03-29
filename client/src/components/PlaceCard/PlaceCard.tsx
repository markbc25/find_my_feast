import React, { FC, useState } from 'react'
import { Button, Image, ImageBackground, Pressable, StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
import TinderCard from 'react-tinder-card';
import Heart from '../../../assets/heart.png';
import Cancel from '../../../assets/cancel.png';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowUpFromBracket';
import { faCar } from '@fortawesome/free-solid-svg-icons/faCar';
import Share from 'react-native-share';
import CurrentSessionStorage from '../../storage/SessionStorage/SessionStorage.js';



const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
EStyleSheet.build({ $rem: window_width / 380 });

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.95 * window_width,
    backgroundColor: 'red',

  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    height: 0.85 * window_height,
    width: 0.95 * window_width,
    backgroundColor: 'red',

  },
  card: {
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: '#fff',
    height: window_height * 0.9,
    width: window_width * 0.93,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    marginTop: window_height * 0.02,
    borderRadius: 20,

  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
    zIndex: -1,
  },
  overlay: {
    padding: 40,
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.60)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  cardTitle: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 5,
    width: '90%',
    alignSelf: 'flex-start',
  },
  shareIcon: {
    color: '#fff',
    alignSelf: 'center',
    marginLeft: 'auto',
    zIndex: 1000,


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

interface Restaurant {
  restaurant: {
    displayName: Object,
    priceLevel: string,
    rating: number,
    types: Array<any>,
    location: Object,
    regularOpeningHours: Object,
    primaryTypeDisplayName: Object,
    photos: Array<any>,
    key: string,
    googleMapsUri: string,
  }
}

const PlaceCard: React.FC<Props> = ({ restaurant }: Restaurant) => {
  const [lastDirection, setLastDirection] = useState('');

  const openSMSMenu = async () => {
    const shareOptions = {
      dialogueTitle: 'Share restaurant',
      message: 'Google Maps Link: ' + restaurant.googleMapsUri,
    }
    try {
      const shareResponse = await Share.open(shareOptions);
    }
    catch (error) { console.log('error: ', error) };
  };

  const swiped = (direction: any, restaurantName: string) => {
    setLastDirection(direction);
    if (direction === 'right') {
      console.log('swiped right on: ' + restaurantName);
      CurrentSessionStorage.insertCurrentLiked(restaurantName, "i am restaurant");
    }
    else {
      console.log('swiped left on: ' + restaurantName);
    }
  }

  const outOfFrame = (name: string) => {
    console.log(('https::').concat(String(restaurant.photos[0].authorAttributions[0].photoUri)));
  }

  return (
    <TinderCard key={restaurant.displayName && restaurant.displayName.text} onSwipe={(dir) => swiped(dir, restaurant.displayName && restaurant.displayName.text)} onCardLeftScreen={() => outOfFrame(restaurant.name)}>
      <View style={styles.card}>
        {restaurant.photos !== undefined && restaurant.photos.length > 0 &&
          <ImageBackground imageStyle={{ resizeMode: 'cover' }} style={styles.cardImage} source={{ uri: 'https::' + String(restaurant.photos[0].authorAttributions[0].photoUri) }}>

            <LinearGradient
              colors={['black', 'transparent']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 0.4 }}
              style={{ flex: 1 }}
            >

              <View style={styles.overlay}>
                <View>

                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.cardTitle}>{restaurant.displayName && restaurant.displayName.text}</Text>
                    <Pressable onTouchStart={openSMSMenu}

                      style={styles.shareIcon}>
                      <Text style={styles.shareIcon}>
                        <FontAwesomeIcon icon={faArrowUpFromBracket} size={24} color={'white'} />
                      </Text>
                    </Pressable>

                  </View>

                  <View style={styles.row}>
                    <Text style={styles.infoText}>
                      {restaurant.priceLevel === "UNKNOWN" && <Text style={{ color: '#b8b8b8' }}>? Price</Text>}
                      {restaurant.priceLevel === "PRICE_LEVEL_INEXPENSIVE" && <Text style={styles.infoText}>$<Text style={{ color: '#b8b8b8' }}>$$$</Text></Text>}
                      {restaurant.priceLevel === "PRICE_LEVEL_MODERATE" && <Text style={styles.infoText}>$$<Text style={{ color: '#b8b8b8' }}>$$</Text></Text>}
                      {restaurant.priceLevel === "PRICE_LEVEL_EXPENSIVE" && <Text style={styles.infoText}>$$$<Text style={{ color: '#b8b8b8' }}>$</Text></Text>}
                      {restaurant.priceLevel === "PRICE_LEVEL_VERY_EXPENSIVE" && <Text style={styles.infoText}>$$$$</Text>}

                      <Text style={styles.infoText}> ꞏ </Text>
                      {restaurant.primaryTypeDisplayName &&
                        <Text style={styles.infoText}>{restaurant.primaryTypeDisplayName.text}</Text>
                      }
                    </Text>
                  </View>
                  {/* 
                <View style={styles.row}>
                  <FontAwesomeIcon icon={faCar} size={18} color={'white'} />
                  <Text style={styles.infoText}>{restaurant.distance} mi</Text>
                </View> */}

                  <View style={styles.row}>
                    <Text style={styles.infoText}>★ {restaurant.rating}</Text>
                  </View>

                </View>
                <View style={styles.buttonRow}>
                  <Pressable
                    onTouchStart={() => console.log('hello!')}
                    style={({ pressed }) => [
                      styles.button,
                      {
                        backgroundColor: pressed ? 'rgba(52, 52, 52, 0.95)' : 'rgba(52, 52, 52, 0.80)',
                      }
                    ]}
                  >
                    <Image style={styles.img} source={Heart} />
                  </Pressable>

                  <Pressable
                    onTouchStart={() => console.log('hello!')}
                    onPressIn={() => { }}
                    onPressOut={() => { }}
                    style={({ pressed }) => [
                      styles.button,
                      {
                        backgroundColor: pressed ? 'rgba(52, 52, 52, 0.95)' : 'rgba(52, 52, 52, 0.80)',
                      }
                    ]}
                  >

                    <Image style={styles.img} source={Cancel} />
                  </Pressable>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        }
      </View>
    </TinderCard>
  )
}

export default PlaceCard;