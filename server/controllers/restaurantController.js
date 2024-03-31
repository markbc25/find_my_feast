const axios = require('axios');
const Restaurant = require('../models/restaurantModel');
require('dotenv').config();

//TODO: Restaurant business logic using GOOGLE MAPS API
exports.getRestaurants = async (req, res) => {
    const url = `https://places.googleapis.com/v1/places:searchNearby`;
    const headers = {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env.GOOGLE_MAPS_API_KEY,
        'X-Goog-FieldMask': 'places.displayName.text,places.priceLevel,places.types,places.primaryTypeDisplayName.text,places.rating,places.location,places.regularOpeningHours.weekdayDescriptions,places.photos,places.id,places.websiteUri,places.googleMapsUri'
    }

    try {

        const response = await axios.post(url, req.body, { headers: headers });
        const data = response.data;
        console.log(JSON.stringify(response.data));
        // TODO: Filter out restaurant data that is in a users Do Not Show list
        res.json(data);
    } catch (error) {
        console.error('Error getting restaurants:', error);
        res.status(500).json({ error: 'Server error' });
    }
}


exports.getRestaurantById = async (req, res) => {
    
}





