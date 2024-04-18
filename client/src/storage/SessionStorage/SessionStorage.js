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
  }

  removeCurrentLiked(key) {
    this.currentLiked.delete(key);
  }

  clearCurrentLiked() {
    this.currentLiked.clear();
  }

  getCurrentLiked() {
    return Array.from(this.currentLiked).map(([name, value]) => (value));
  }

  setEmail(value) {
    this.email = value;
  }

  getEmail() {
    return this.email;
  }
}

let sessionStorageInstance = new SessionStorage();
export default sessionStorageInstance;