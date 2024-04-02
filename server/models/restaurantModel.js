
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    types: {
        type: [String],
        required: true
    },
    location: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    rating: {
        type: Number,
        required: false,
    },
    priceLevel: {
        type: String,
        required: false
    },
    displayName: {
        text: {
            type: String,
            required: true
        }
    },
    primaryTypeDisplayName: {
        text: {
            type: String,
            required: false
        }
    },
    photoUrl: {
        type: String,
        required: true
    },
    googleMapsUri: {
        type: String,
        required: true,
    }
});

// Create the model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = { Restaurant };
