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

    // Function to set value in session storage
    setIncludedTypes(newIncludedTypes) {

        //console.log("Array as argument in static: " + newIncludedTypes);
        this.includedTypes.length = 0;
        if (newIncludedTypes.length === 0) {
            this.includedTypes[0] = "restaurant";
        }
        else {
            for (i = 0; i < newIncludedTypes.length; i++) {
                this.includedTypes[i] = newIncludedTypes[i];
            }
        }

        console.log("Types in static instance: " + this.includedTypes);
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

        //console.log("Array as argument in static: " + newIncludedTypes);
        this.includedPriceLevels.length = 0;
        if (newPriceLevels.length === 0) {
            this.includedPriceLevels = [1, 2, 3, 4];
            this.minPrice = 1;
            this.maxPrice = 4;
        }
        else {
            for (i = 0; i < newPriceLevels.length; i++) {
                this.includedPriceLevels[i] = newPriceLevels[i];
            }
        }

        console.log("Price levels in static instance: " + this.includedPriceLevels);
    }

    getIncludedPriceLevels() {
        return this.includedPriceLevels;
    }

}

// Create a singleton instance and export it
let preferencesAndRestaurantsInstance = Object.freeze(new PreferencesAndRestaurants());
export default preferencesAndRestaurantsInstance;