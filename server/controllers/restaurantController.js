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
        'X-Goog-FieldMask': 'places.displayName.text,places.priceLevel,places.types,places.primaryTypeDisplayName.text,places.rating,places.location,places.id,places.googleMapsUri,places.servesVegetarianFood,places.primaryType'
    }

    try {
        //Step 0: get vegetarian and vegan bools 
        const user = await User.findOne({ email: req.body.userData.email });
        let vegan = user.vegan;
        let vegetarian = user.vegetarian;

        // Step 1: Make a POST request to fetch data
        const response = await axios.post(url, req.body.restaurantData, { headers: headers });
        const data = response.data.places;
        console.log("RESTAURANT DATA: " + JSON.stringify(data));

        // TODO: FILTER OUT RESTAURANT DATA THAT IS IN A USERS DO NOT SHOW LIST
        // const doNotShowResponse = await axios.get("http://10.0.2.2:3000/api/users/doNotShow/", {
        //     params: {
        //         email: req.body.userData.email,
        //     }
        // });
        // const doNotShowList = doNotShowResponse.data;
        
        let filteredData = [];

        // TODO: Filter undefined restaurants
        // TODO: Filter out restaurants by PriceLevel

        // TODO: FILTER BY DIETARY RESTRICTIONS
        //if (vegan is true)
        //iterate through response
        //iterate through included types
        //filter restaurants with "vegan_restaurant" type
        //else if (vegetarian is true)
        //iterate through response
        //filter out by  restaurant.servesVegetarianFood is true
        if (vegan) {
            for (let k = 0; k < data.length; k++) {
                for (let j = 0; j < data[k].types.length; j++) {
                    if (data[k].types[j] == 'vegan_restaurant') {
                        console.log("WE HAVE A VEGAN RESTAURANT");
                        filteredData.push(data[k]);
                        break;
                    }
                }
            }
        }
        else if (vegetarian) {
            for (let k = 0; k < data.length; k++) {
                if (data[k].servesVegetarianFood !== null && data[k].servesVegetarianFood === true) {
                    filteredData.push(data[k]);
                }
            }
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
            if (photoReferenceResponse.data.result.photos && photoReferenceResponse.data.result.photos[0]) {
                photoReference = photoReferenceResponse.data.result.photos[0].photo_reference// Just grabs a single photo reference (for now)
                // Step 3. Call the Photos API and use photoRefence to get the photo URL
                photosUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=450&photoreference=${photoReference}&key=${process.env.GOOGLE_MAPS_API_KEY}`
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
        if (vegan || vegetarian) {
           
            let finalResults = filteredData.filter((item) => {
                if (item) {
                    return item;
                }
            });

            console.log("filtered data: " + JSON.stringify(filteredData));

            res.json(finalResults);
        } else {
            let finalResults = data.filter((item) => {
                if (item) {
                    return item;
                }
            });
            
            res.json(finalResults);
        }


    } catch (error) {
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