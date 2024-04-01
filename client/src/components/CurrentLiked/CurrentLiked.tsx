import React, { FC, useEffect, useRef, useState } from 'react';
import { Modal, StyleSheet, Text, View, Pressable, Alert, Image, ScrollView, Button, Dimensions } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import CurrentSessionStorage from '../../storage/SessionStorage/SessionStorage.js'

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },
  image: {
    width: 150,
    height: 150,
    objectFit: 'cover',
  },
  widget: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5
  },
  row: {
    display: 'flex',
    gap: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },

});

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingBottom: 35,
    paddingTop: 35,
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#0f9100',
  },
  buttonClose: {
    backgroundColor: '#0f9100',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 17,
    color: 'black'
  },
  no: {
    backgroundColor: "darkgray"
  },
  fullscreenOverlay: {
    position: 'absolute',
    width: screen.width,
    height: screen.height,
    zIndex: 10,
  },
})

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
    id: string,
  }
}

 function getDollarSigns(value: string) {
  if (value === "INEXPENSIVE") {
    return '$';
  }
  else if (value === "MODERATE") {
    return '$$';
  }
  else if (value === "EXPENSIVE") {
    return '$$$';
  }
  else if (value === "VERY_EXPENSIVE") {
    return '$$$$';
  }
}

const CurrentLiked: FC = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [finalDecision, setFinalDecision] = useState<any>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [decision, setDecision] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const updateCurrentLiked = () => {
    setRestaurants(CurrentSessionStorage.getCurrentLiked());
    console.log("called: " + restaurants);
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused

      updateCurrentLiked();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const handlePress = (id: number) => {
    setModalVisible(true);
    setDecision(id);
  }

  const handleConfirm = () => {
    if (decision != null) {
      const selectedRestaurant = restaurants.find(r => r.id === decision);
      if (selectedRestaurant) {
        setFinalDecision(selectedRestaurant);
        setRestaurants([selectedRestaurant]);
        setShowConfetti(true);
      }
    }
    setModalVisible(false);
    setDecision(null);
  }

  const handleCancel = () => {
    setModalVisible(false);
    setDecision(null);
  }

  useEffect(() => {
  }, [showConfetti]);

  return (
    <ScrollView style={styles.centeredView}>
      {
        showConfetti === true ?
          <View key={Date.now()} style={styles.centeredView}>
            <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut={true} />

            {restaurants && restaurants.length > 0 && restaurants.map((restaurant) =>
              <Pressable onPress={() => handlePress(restaurant.id)}
                style={({ pressed }) => [
                  styles.widget,
                  {
                    backgroundColor: pressed ? 'rgba(52, 52, 52, 0.15)' : 'rgba(52, 52, 52, 0.0)',
                  }
                ]}
                key={restaurant.id}
              >
                <Image source={restaurant.img} style={styles.image} />
                <View>
                  <Text style={styles.cardTitle}>{restaurant.name}</Text>
                  <Text style={styles.infoText}>{restaurant.priceLevel}</Text>
                </View>
              </Pressable>
            )}
          </View>
          :
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={modalStyles.centeredView}>
                <View style={modalStyles.modalView}>
                  <Text style={modalStyles.modalText}>Choose this restaurant?</Text>
                  <View style={styles.row}>
                    <Pressable
                      style={[modalStyles.button, modalStyles.buttonClose]}
                      onPress={handleConfirm}
                    >
                      <Text style={modalStyles.textStyle}>Yes!</Text>
                    </Pressable>
                    <Pressable
                      style={[modalStyles.button, modalStyles.buttonClose, modalStyles.no]}
                      onPress={handleCancel}
                    >
                      <Text style={modalStyles.textStyle}>No</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>

            {restaurants && restaurants.length > 0 && restaurants.map((restaurant) =>
              <Pressable onPress={() => handlePress(restaurant.id)}
                style={({ pressed }) => [
                  styles.widget,
                  {
                    backgroundColor: pressed ? 'rgba(52, 52, 52, 0.15)' : 'rgba(52, 52, 52, 0.0)',
                  }
                ]}
                key={restaurant.id}
              >
                <Image source={restaurant.img} style={styles.image} />
                <View>
                  <Text style={styles.cardTitle}>{restaurant.displayName.text}</Text>
                  {/* <View style={styles.row}>
                    <Image source={require('../../../assets/car.png')} /> 
                    <Text style={styles.infoText}>{restaurant.distance} mi</Text>
                </View> */}
                  <Text style={styles.infoText}> {restaurant.priceLevel === "UNKNOWN" && <Text style={{ color: '#b8b8b8' }}>? Price</Text>}
                      {restaurant.priceLevel === "PRICE_LEVEL_INEXPENSIVE" && <Text style={styles.infoText}>$<Text style={{ color: '#b8b8b8' }}>$$$</Text></Text>}
                      {restaurant.priceLevel === "PRICE_LEVEL_MODERATE" && <Text style={styles.infoText}>$$<Text style={{ color: '#b8b8b8' }}>$$</Text></Text>}
                      {restaurant.priceLevel === "PRICE_LEVEL_EXPENSIVE" && <Text style={styles.infoText}>$$$<Text style={{ color: '#b8b8b8' }}>$</Text></Text>}
                      {restaurant.priceLevel === "PRICE_LEVEL_VERY_EXPENSIVE" && <Text style={styles.infoText}>$$$$</Text>}
                  </Text>
                  <Text style={styles.infoText}>{restaurant.rating}</Text>
                </View>
              </Pressable>
            )}
          </View>
      }
    </ScrollView>
  );
};

export default CurrentLiked;