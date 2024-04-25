import React, { FC } from 'react';
import { View } from 'react-native';


let instance;

class PreferencesAndRestaurants {
    includedTypes;
    radius;
    includedPriceLevels;
    searchType;

    constructor() {
        if (!instance) {
            instance = this;
        }
        this.includedTypes = ["restaurant"];

        this.includedPriceLevels = ['PRICE_LEVEL_INEXPENSIVE', 'PRICE_LEVEL_MODERATE', 'PRICE_LEVEL_EXPENSIVE', 'PRICE_LEVEL_VERY_EXPENSIVE'];
        this.radius = 50000;
        this.searchType = 'DISTANCE';

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
            this.includedPriceLevels = ['PRICE_LEVEL_INEXPENSIVE', 'PRICE_LEVEL_MODERATE', 'PRICE_LEVEL_EXPENSIVE', 'PRICE_LEVEL_VERY_EXPENSIVE'];
        }
        else {
            this.includedPriceLevels = newPriceLevels;
        }
    }

    getIncludedPriceLevels() {
        return this.includedPriceLevels;
    }

    setSearchType(newSearchType) {
        this.searchType = newSearchType;
        console.log(this.searchType);
    }

    getSearchType() {
        return this.searchType;
    }
}

// Create a singleton instance and export it
let preferencesAndRestaurantsInstance = new PreferencesAndRestaurants();
export default preferencesAndRestaurantsInstance;