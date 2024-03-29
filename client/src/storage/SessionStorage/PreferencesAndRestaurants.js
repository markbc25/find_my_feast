import React, { FC } from 'react';
import { View } from 'react-native';


let instance;

class PreferencesAndRestaurants {
    #includedTypes;
    #radius;


    constructor() {
        if (!instance) {
            instance = this;
        }
        this.includedTypes = [];
        // [this.includedTypes, this.setIncludedTypes] = React.useState(['restaurant']);
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
}

// Create a singleton instance and export it
let preferencesAndRestaurantsInstance = Object.freeze(new PreferencesAndRestaurants());
export default preferencesAndRestaurantsInstance;