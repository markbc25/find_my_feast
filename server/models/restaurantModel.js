
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
        required: true
    },
    websiteUri: {
        type: String,
        required: true
    },
    regularOpeningHours: {
        weekdayDescriptions: {
            type: [String],
            required: true
        }
    },
    priceLevel: {
        type: String,
        required: true
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
            required: true
        }
    },
    photos: [
        {
            name: {
                type: String,
                required: true
            },
            widthPx: {
                type: Number,
                required: true
            },
            heightPx: {
                type: Number,
                required: true
            },
            authorAttributions: [
                {
                    displayName: {
                        type: String,
                        required: true
                    },
                    uri: {
                        type: String,
                        required: true
                    },
                    photoUri: {
                        type: String,
                        required: true
                    }
                }
            ]
        }
    ]
});

// Create the model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = { Restaurant };
