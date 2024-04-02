import React, { FC } from 'react';
import { View } from 'react-native';


let instance;

class PreferencesAndRestaurants {
    includedTypes;
    radius;
    includedPriceLevels;

    constructor() {
        if (!instance) {
            instance = this;
        }
        this.includedTypes = ["restaurant"];
        this.includedPriceLevels = [1, 2, 3, 4];
        return instance;
    }

    setIncludedTypes(newIncludedTypes) {
        if (newIncludedTypes.length === 0) {
            this.includedTypes[0] = "restaurant";
        }
        else {
            this.includedTypes = newIncludedTypes;
        }
    }

    getIncludedTypes() {
        return this.includedTypes;
    }

    setRadius(newRadius) {
        this.radius = newRadius;
    }

    getRadius() {
        return this.radius;
    }

    setIncludedPriceLevels(newPriceLevels) {
        this.includedPriceLevels.length = 0;
        if (newPriceLevels.length === 0) {
            this.includedPriceLevels = [1, 2, 3, 4];
        }
        else {
            this.includedPriceLevels = newPriceLevels;
        }
    }

    getIncludedPriceLevels() {
        return this.includedPriceLevels;
    }
}

// Create a singleton instance and export it
let preferencesAndRestaurantsInstance = new PreferencesAndRestaurants();
export default preferencesAndRestaurantsInstance;