import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ListEntry from '../../components/ListEntry/ListEntry';
import axios from 'axios';
import sessionStorageInstance from '../../storage/SessionStorage/SessionStorage';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
});

const DoNotShow: FC = ({ navigation }) => {
    // const restaurants = db;
    const [restaurants, setRestaurants] = useState([]);

    async function fetchDoNotShow() {
        const url = "http://10.0.2.2:3000/api/users/doNotShow/";

        const response = await axios.get(url, {
            params: {
                email: sessionStorageInstance.getEmail(),
            }
        });

        setRestaurants(response.data);
        console.log(JSON.stringify(response.data));
    }

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchDoNotShow();
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);

    return (

        <View style={styles.container}>
            {restaurants.length > 0 && restaurants.map((restaurant) =>
                restaurant.displayName ? <ListEntry textValue={restaurant.displayName.text} key={restaurant.id} /> : <View />
            )}
        </View>
    );
}

export default DoNotShow;
