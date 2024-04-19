import React, { FC, useState } from 'react'
import { Button, Image, ImageBackground, Pressable, StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
import TinderCard from 'react-tinder-card';
import Heart from '../../../assets/heart.png';
import Cancel from '../../../assets/cancel.png';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowUpFromBracket';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons/faArrowsLeftRight';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons/faCircleExclamation';
import { faCar } from '@fortawesome/free-solid-svg-icons/faCar';
import Share from 'react-native-share';
import CurrentSessionStorage from '../../storage/SessionStorage/SessionStorage.js';
import axios from 'axios';



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
    backgroundColor: 'red',
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
  greenOverlay: {
    padding: 40,
    height: '100%',
    backgroundColor: 'rgba(52, 75, 52, 0.60)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center"
  },
  redOverlay: {
    padding: 40,
    height: '100%',
    backgroundColor: 'rgba(100, 10, 10, 0.60)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center"
  },
  cardTitle: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 5,
    width: '90%',
    alignSelf: 'flex-start',
  },
  centeredView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
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
  responseRow : {
    display: 'flex',
    gap: 15,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: "wrap",
    marginBottom: 25
  },
  responseTitle : {
    fontSize: 28,
    color: '#fff',
    fontWeight: "bold",
    textAlign: "center"
  },
  primaryText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 5,
    textAlign: "center"
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
  },
  headerImg: {
    width: 55,
    height: 55,
    objectFit: 'contain',
    marginBottom: 10
  },
  msg: {
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
    padding: 25,
    textAlign: "center",
    fontSize: 18,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  }
});

export interface Restaurant {
  restaurant: {
    displayName: Object,
    priceLevel: string,
    rating: number,
    types: Array<any>,
    location: Object,
    primaryTypeDisplayName: Object,
    googleMapsUri: string,
    id: string,
    photoUrl: string,
  }
}

const PlaceCard: React.FC<Props> = ({ restaurant }: Restaurant) => {
  const [lastDirection, setLastDirection] = useState('');
  const [dontShow, setDontShow] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [err, setErr] = useState(false);

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

  const swiped = (direction: any, restaurant: Restaurant) => {
    if (dontShow === true) return
    setLastDirection(direction);
    if (direction === 'right' || direction === 'up') {
      CurrentSessionStorage.insertCurrentLiked(restaurant.id, restaurant);
    }
    else {
      // console.log('swiped left on: ' + restaurant.displayName.text);
    }
  }

  const outOfFrame = (name: string) => {
    // console.log(('https::').concat(restaurant.photoUrl));
  }
  
  async function handleAddToFavorites() {
    const body = {
      user: {
        email: CurrentSessionStorage.getEmail(),
      },
      restaurant: restaurant
    }

    try {
      const response = await axios.post('http://10.0.2.2:3000/api/users/favorites', body);
      console.log("Response:", response.data);
      CurrentSessionStorage.insertCurrentLiked(restaurant.id, restaurant);
      setFavorite(true);
    }
    catch(error) {
      console.log("error adding to favorites in place card: " + error);
      setErr(true);
      setTimeout(() => setErr(false), 3000);
    }
  }


  async function handleAddToDoNotShow() {
    const body = {
      user: {
        email: CurrentSessionStorage.getEmail(),
      },
      restaurant: restaurant
    }

    try {
      const response = await axios.post('http://10.0.2.2:3000/api/users/doNotShow', body);
      console.log("Response:", response.data);
      setDontShow(true);
    }
    catch(error) {
      console.log("error adding to do not show in place card: " + error);
      setErr(true);
      setTimeout(() => setErr(false), 3000);
    }
  }
  return (
    <TinderCard key={restaurant.displayName && restaurant.displayName.text} onSwipe={(dir) => swiped(dir, restaurant)} onCardLeftScreen={() => outOfFrame(restaurant.name)}>
      {
        dontShow ? 
          <View style={styles.card}>
            
            <LinearGradient
              colors={['red', 'transparent']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 0.5 }}
              style={{ flex: 1, borderRadius: 20 }}
            >
              <View style={styles.redOverlay}>
                <View>
                  <View style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 20}}>
                    <Image style={styles.headerImg} source={Cancel} />
                    <Text style={styles.responseTitle}>Added to "Don't Show"!</Text>
                  </View>
                  <Text style={styles.primaryText}>We won't suggest this location again.</Text>
                  <View style={styles.centeredView}>
                    <FontAwesomeIcon icon={faArrowsLeftRight} style={{color: "white", marginBottom: 20}} size={80}/>
                    <Text style={styles.infoText}>Swipe any direction to continue.</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        : favorite ? 
          <View style={styles.card}>
            <LinearGradient
                colors={['green', 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.5 }}
                style={{ flex: 1, borderRadius: 20 }}
              >
              <View style={styles.greenOverlay}>
              
                <View>
                  <View style={styles.responseRow}>
                    <Text style={styles.responseTitle}>Added to Favorites!</Text>
                    <Image style={styles.img} source={Heart} />
                  </View>
                  <Text style={styles.primaryText}>Easily return to this restaurant anytime in the "Lists" tab.</Text>
                  <View style={styles.centeredView}>
                    <FontAwesomeIcon icon={faArrowRight} style={{color: "white", marginBottom: 20}} size={80}/>
                    <Text style={styles.infoText}>Swipe any direction to continue.</Text>
                  </View>
                </View>
              </View>
              </LinearGradient>
          </View> :
        <View style={styles.card}>
          {
            <ImageBackground imageStyle={{ resizeMode: 'cover' }}  style={styles.cardImage} source={{uri: restaurant.photoUrl}}>
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
                        {restaurant.priceLevel === null || restaurant.priceLevel === undefined && <Text style={{ color: '#b8b8b8' }}>????</Text>}
                        {restaurant.priceLevel === "PRICE_LEVEL_UNKNOWN" && <Text style={{ color: '#b8b8b8' }}>? Price</Text>}
                        {restaurant.priceLevel === "PRICE_LEVEL_INEXPENSIVE" && <Text style={styles.infoText}>$<Text style={{ color: '#b8b8b8' }}>$$$</Text></Text>}
                        {restaurant.priceLevel === "PRICE_LEVEL_MODERATE" && <Text style={styles.infoText}>$$<Text style={{ color: '#b8b8b8' }}>$$</Text></Text>}
                        {restaurant.priceLevel === "PRICE_LEVEL_EXPENSIVE" && <Text style={styles.infoText}>$$$<Text style={{ color: '#b8b8b8' }}>$</Text></Text>}
                        {restaurant.priceLevel === "PRICE_LEVEL_VERY_EXPENSIVE" && <Text style={styles.infoText}>$$$$</Text>}

                        <Text style={styles.infoText}> ꞏ </Text>
                        {restaurant.primaryTypeDisplayName &&
                          <Text style={styles.infoText}>{restaurant.primaryTypeDisplayName.text}</Text>
                        }
                        {restaurant.primaryTypeDisplayName === undefined &&
                          <Text style={styles.infoText}>{'Unknown type'}</Text>
                        }
                      </Text>
                    </View>

                    <View style={styles.row}>
                      <Text style={styles.infoText}>★ {restaurant.rating}</Text>
                    </View>

                  </View>
                  {err && 
                    <View style={styles.msg}>
                      <FontAwesomeIcon icon={faCircleExclamation} size={32}/>
                      <Text style={{fontSize: 18, color: "black"}}>Restaurant is already in list!</Text>
                    </View>}
                  <View style={styles.buttonRow}>
                    
                    <Pressable
                      onTouchStart={handleAddToFavorites}
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
                      onTouchStart={handleAddToDoNotShow}
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

      }
    </TinderCard>
  )
}

export default PlaceCard;