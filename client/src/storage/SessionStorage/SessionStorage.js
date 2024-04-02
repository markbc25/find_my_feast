import React, { FC } from 'react';
import { View } from 'react-native';


let instance;

class SessionStorage {
  currentLiked = new Map();
  email;

  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  // Function to set value in session storage
  insertCurrentLiked(key, value) {
    this.currentLiked.set(key, value);
    console.debug("inserted to currentLiked, size: ", this.currentLiked.size);
    console.debug("current likes: " + this.currentLiked)
  }

  removeCurrentLiked(key) {
    this.currentLiked.delete(key);
    console.debug("removed from currentLiked, size: ", this.currentLiked.size);
  }

  getCurrentLiked() {
    return Array.from(this.currentLiked).map(([name, value]) => (value));
  }

  setEmail(value) {
    console.log("value in sessions torage: " + value);
    this.email = value;
    console.log("updating email in session storage: " + this.email);
  }

  getEmail() {
    return this.email;
  }
}

let sessionStorageInstance = new SessionStorage();
export default sessionStorageInstance;