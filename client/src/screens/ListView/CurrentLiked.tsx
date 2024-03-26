import React, { FC, useState } from 'react';
import {Modal, StyleSheet, Text, View, Pressable, Alert, Image, ScrollView, Button} from 'react-native';
import ListEntry from '../../components/ListEntry/ListEntry';
import PromptModal from '../../components/PromptModal/PromptModal';
import { NavigationContainer } from '@react-navigation/native';

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
      }
})

const db = [
    {
      id: 0,
      name: 'McDonalds',
      img: require('../../../assets/test.jpg'),
      price: 1,
      distance: 2,
    },
    {
      id: 1,
      name: 'Olive Garden',
      img: require('../../../assets/test.jpg'),
      price: 2,
      distance: 4,
    },
    {
      id: 2,
      name: 'Nam Cafe',
      img: require('../../../assets/test.jpg'),
      price: 2,
      distance: 1,
    },
    {
      id: 3,
      name: '1860',
      img: require('../../../assets/test.jpg'),
      price: 3,
      distance: 10,
    },
]

const getDollarSigns = (price: number) => {
    if (price === 1) return '$'
    else if (price === 2) return '$$'
    else return '$$$'
}

const CurrentLiked: FC = () => {
    const restaurants = db;
    const [modalVisible, setModalVisible] = useState(false);
    const [decision, setDecision] = useState(-1);

    const handlePress = (id: number) => {
      setModalVisible(true);
      setDecision(id);
    }
    
    const handleConfirm = (id: number) => {
        setModalVisible(false);
    }

    return (
    <ScrollView style={styles.centeredView}>
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
                        onPress={() => handleConfirm(decision)}
                    >
                        <Text style={modalStyles.textStyle}>Yes!</Text>
                    </Pressable>
                    <Pressable
                        style={[modalStyles.button, modalStyles.buttonClose, modalStyles.no ]}
                        onPress={() => handleConfirm(decision)}
                    >
                        <Text style={modalStyles.textStyle}>No</Text>
                    </Pressable>
                  </View>
              </View>
            </View>
        </Modal>

        {restaurants.map((restaurant) => 
        <Pressable onPress={() => handlePress(restaurant.id)}
            style={({ pressed }) => [
                styles.widget,
                {
                backgroundColor: pressed ? 'rgba(52, 52, 52, 0.15)' : 'rgba(52, 52, 52, 0.0)', 
                }
            ]}
            key={restaurant.id}
        >
            <Image source={restaurant.img} style={styles.image}/>
            <View>
                <Text style={styles.cardTitle}>{restaurant.name}</Text>
                <View style={styles.row}>
                    {/* <Image source={require('../../../assets/car.png')} /> */}
                    <Text style={styles.infoText}>{restaurant.distance} mi</Text>
                </View>
                <Text style={styles.infoText}>{getDollarSigns(restaurant.price)}</Text>
            </View>
        </Pressable>
        )}
    </ScrollView>
    );
};

export default CurrentLiked;
