import React, { useState } from 'react';
import { Button, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

interface RestaurantProps {
  textValue: string,
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingTop: 25,
    paddingBottom: 15,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 100
  },
  name: {
    fontSize: 18,
    textAlign: 'left',
    color:'#402b1f',
  }
});

const ListEntry: React.FC<RestaurantProps> = (restaurant: RestaurantProps) => {
    const [iconName, setIconName] = useState("minus-square-o");

    const toggleIcon = () => {
        setIconName(iconName === "minus-square-o" ? "minus-square" : "minus-square-o");
    };

    return (
      <View style={styles.container}>
        <Text style={styles.name}>{restaurant.textValue}</Text>
        <Pressable onPress={toggleIcon}>
            <Icon name={iconName} size={24}/>
        </Pressable>
      </View>
    );
};

export default ListEntry;
