import React, { useState } from 'react';
import { Alert, Button, Dimensions, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import CurrentSessionStorage from '../../storage/SessionStorage/SessionStorage.js';
import axios from 'axios';
import { Restaurant } from '../PlaceCard/PlaceCard.js';

const screen = Dimensions.get('window');

interface ListEntryProps {
  restaurant: Restaurant;
  list: string;
}

const styles = StyleSheet.create({
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
});

const ListEntry: React.FC<ListEntryProps> = ({ restaurant, list }) => {
  const [iconName, setIconName] = useState("minus-square-o");
  const [modalVisible, setModalVisible] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const removeFromFavorites = async () => {
    setModalVisible(false);
    const body = {
      user: {
        email: CurrentSessionStorage.getEmail(),
      },
      restaurant: restaurant
    }
    try {
      const response = await axios.delete('http://10.0.2.2:3000/api/users/favorites', { data: body });
    }
    catch (error) {
      console.log("error deleting from favorites in list entry: " + error);
    }
    setModalVisible(false);
  }

  const removeFromDontShow = async () => {
    setModalVisible(false);
    try {
      const body = {
        user: {
          email: CurrentSessionStorage.getEmail(),
        },
        restaurant: restaurant
      };
      const response = await axios.delete('http://10.0.2.2:3000/api/users/doNotShow', { data: body });
    } catch (error) {
      console.error("Error deleting from favorites in list entry:", error);
    }
  }

  const pressYes = () => {
    setModalVisible(false);
    if (list === 'f') removeFromFavorites();
    else removeFromDontShow();
    setDeleted(true);
  }

  return (
    <>
      {deleted === false &&
        <>
          <Pressable onPress={() => setModalVisible(true)}
            style={({ pressed }) => [
              styles.widget,
              {
                backgroundColor: pressed ? 'rgba(52, 52, 52, 0.15)' : 'rgba(52, 52, 52, 0.0)',
              }
            ]}
            key={restaurant.id}
          >
            {restaurant && <Image source={{ uri: restaurant.photoUrl }} style={styles.image} />}
            <View>
              <Text>
                <Text style={styles.cardTitle}>{restaurant.displayName && restaurant.displayName.text}</Text>
              </Text>
              <Text>
                {restaurant.priceLevel === null && <Text style={{ color: '#b8b8b8' }}>? Price</Text>}
                {restaurant.priceLevel === "PRICE_LEVEL_UNKNOWN" && <Text style={{ color: '#b8b8b8' }}>? Price</Text>}
                {restaurant.priceLevel === "PRICE_LEVEL_INEXPENSIVE" && <Text style={styles.infoText}>$<Text style={{ color: '#b8b8b8' }}>$$$</Text></Text>}
                {restaurant.priceLevel === "PRICE_LEVEL_MODERATE" && <Text style={styles.infoText}>$$<Text style={{ color: '#b8b8b8' }}>$$</Text></Text>}
                {restaurant.priceLevel === "PRICE_LEVEL_EXPENSIVE" && <Text style={styles.infoText}>$$$<Text style={{ color: '#b8b8b8' }}>$</Text></Text>}
                {restaurant.priceLevel === "PRICE_LEVEL_VERY_EXPENSIVE" && <Text style={styles.infoText}>$$$$</Text>}

                <Text style={styles.infoText}> ꞏ </Text>
                {restaurant.primaryTypeDisplayName &&
                  <Text style={styles.infoText}>{restaurant.primaryTypeDisplayName.text}</Text>
                }
              </Text>
              <Text style={styles.infoText}>★{restaurant.rating}</Text>
            </View>
          </Pressable>
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
                {list === "f" ? <Text style={modalStyles.modalText}>Remove from Favorites list?</Text>
                  : <Text style={modalStyles.modalText}>Remove from "Do Not Show" list?</Text>}

                <View style={styles.row}>
                  <Pressable
                    style={[modalStyles.button, modalStyles.buttonClose, modalStyles.no]}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={modalStyles.textStyle}>No</Text>
                  </Pressable>
                  <Pressable
                    style={[modalStyles.button, modalStyles.buttonClose]}
                    onPress={pressYes}
                  >
                    <Text style={modalStyles.textStyle}>Yes</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </>
      }
    </>
  );
};

export default ListEntry;
