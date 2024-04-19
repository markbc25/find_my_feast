const axios = require('axios');
const Restaurant = require('../models/restaurantModel');
const { User } = require('../models/userModel');
require('dotenv').config();

//TODO: Restaurant business logic using GOOGLE MAPS API
exports.getRestaurants = async (req, res) => {
    const url = `https://places.googleapis.com/v1/places:searchNearby`;

    const headers = {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env.GOOGLE_MAPS_API_KEY,
        'X-Goog-FieldMask': 'places.displayName.text,places.priceLevel,places.types,places.primaryTypeDisplayName.text,places.rating,places.location,places.id,places.googleMapsUri,places.servesVegetarianFood'
    }

    try {
        //Step 0: get vegetarian and vegan bools 
        let user = await User.findOne({ email: req.body.userData.email });
        if (!user)
            return res.status(404).send('User not found');
        let vegan = user.vegan;
        let vegetarian = user.vegetarian;


        //Step 0.1: if vegan, overwrite preferences to only show vegan restaurants
        if (vegan) {
            req.body.restaurantData.includedTypes = ["vegan_restaurant"]
        }
      
        // Step 1: Make a POST request to fetch data
        const response = await axios.post(url, req.body.restaurantData, { headers: headers });
        let data = response.data.places;
        user = await User.findOne({ email: req.body.userData.email }).populate('doNotShow');

        const doNotShowListRestaurants = user.doNotShow;
        const doNotShowIds = new Map();""
        for (let k = 0; k < doNotShowListRestaurants.length; k++) {
            doNotShowIds.set(doNotShowListRestaurants[k].id, '');
        }

        data = data.filter((restaurant) => {
            if (restaurant && !doNotShowIds.has(restaurant.id))
                return restaurant;
        });

        // TODO: Filter out restaurants by PriceLevel

        // // TODO: Filter out restaurants by Distance
        // if (req.body.restaurantData.locationRestriction && req.body.restaurantData.locationRestriction.circle) {
        //     const userLatitude = req.body.restaurantData.locationRestriction.circle.center.latitude;
        //     const userLongitude = req.body.restaurantData.locationRestriction.circle.center.longitude;
        //     const userRadius = req.body.restaurantData.locationRestriction.circle.radius;

        //     data = data.filter((restaurant) => {
        //     if (restaurant && restaurant.location) {
        //         const restaurantLatitude = restaurant.location.latitude;
        //         const restaurantLongitude = restaurant.location.longitude;

        //         // Calculate the distance between user and restaurant using Haversine formula
        //         const distance = calculateDistance(userLatitude, userLongitude, restaurantLatitude, restaurantLongitude);

        //         if (distance <= userRadius) {
        //         return restaurant;
        //         }
        //     }
        //     });
        // }

        //VEGETARIAN
        if (!vegan && vegetarian) {
            data = data.filter((restaurant) => {
                if (restaurant.servesVegetarianFood !== null && restaurant.servesVegetarianFood === true) {
                    return restaurant;
                }
            });
        }

        // Get a list of placeIds from restaurant data
        const placeIds = data.map(restaurant => {
            if (restaurant && restaurant.id) {
                return restaurant.id;
            }
        });

        // Step 2: Make a GET request to fetch photo references
        for (const id of placeIds) {
            const photoRefrenceUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${process.env.GOOGLE_MAPS_API_KEY}`
            const photoReferenceResponse = await axios.get(photoRefrenceUrl);

            let photoReference = null;
            let photoUrl = "";
            if (photoReferenceResponse.data.result.photos && photoReferenceResponse.data.result.photos[1]) {
                photoReference = photoReferenceResponse.data.result.photos[1].photo_reference// Just grabs a single photo reference (for now)
                // Step 3. Call the Photos API and use photoRefence to get the photo URL
                photosUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1920&photoreference=${photoReference}&key=${process.env.GOOGLE_MAPS_API_KEY}`
                const photosResponse = await axios.get(photosUrl);
                photoUrl = photosResponse.request.res.responseUrl;
            }

            //Step 4. Attach a photoUrl field in the original placeData.
            for (let restaurant of data) {
                if (restaurant.id === id)
                    restaurant.photoUrl = photoUrl;
            }

        }


        // Final Step: Send the data to the client
        res.json(data);
    }
    catch (error) {
        console.error('Error fetching restaurant data:', error);
    }
}


exports.getRestaurantById = async (req, res) => {
    const url = `https://places.googleapis.com/v1/places/${req.params.id}`;
    const headers = {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env.GOOGLE_MAPS_API_KEY,
        'X-Goog-FieldMask': 'places.displayName.text,places.priceLevel,places.types,places.primaryTypeDisplayName.text,places.rating,places.location,places.regularOpeningHours.weekdayDescriptions,places.id,places.websiteUri'
    }
    try {

        //Step 1.
        const response = await axios.get(url, { headers: headers });
        const data = response.data;

        //TODO FILTER OUT RESTAURANT DATA THAT IS IN A USERS DO NOT SHOW LIST

        // Get a list of placeIds from data
        const placeIds = data.map(restaurant => {
            if (restaurant && restaurant.id) {
                return restaurant.id;
            }
        });

        placeIds.forEach(id => async () => {
            let photoRefrenceArray = []
            const photoRefrenceUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${process.env.GOOGLE_MAPS_API_KEY}`
            const photoRefrenceResponse = await axios.get(photoRefrenceUrl)
            photoRefrenceArray.push(photoRefrenceResponse.data.photos.photo_refrence);
        });

        //Step 2.
        const photoRefrenceUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid={}&key={process.env.GOOGLE_MAPS_API_KEY}`
        const photoRefrenceResponse = await axios.get()
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}