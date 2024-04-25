/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

//comment or uncommment as needed
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ProfileView from './src/screens/ProfileView/ProfileView';
import SignInView from './src/screens/SignInView/SignInView';
import PreferencesView from './src/screens/PreferencesView/PreferencesView';
import HomeView from './src/screens/HomeView/HomeView';
import Favorites from './src/screens/ListView/Favorites';
import Routes from './src/navigation/Routes';
import SignUpView from './src/screens/SignUpView/SignUpView';
import SignInOrUpView from './src/components/SignInOrUpView/SignInOrUpView';
import LottieSplashScreen from "react-native-lottie-splash-screen";
import LottieView from "lottie-react-native";
import storage from './src/storage/AsyncStorage'
import sessionStorageInstance from './src/storage/SessionStorage/SessionStorage';

const homeIcon = require('./assets/home.png');
const homeActiveIcon = require('./assets/home_active.png');
const preferencesIcon = require('./assets/preferences.png');
const preferencesActiveIcon = require('./assets/preferences_active.png');
const savedIcon = require('./assets/save.png');
const savedActiveIcon = require('./assets/save_active.png');
const userIcon = require('./assets/user.png');
const userActiveIcon = require('./assets/user_active.png');

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isSignedIn, setIsSignedIn] = useState(2);


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'white',
  };


  useEffect(() => {
    LottieSplashScreen.hide();

    storage
      .load({
        key: 'loginState',

        // autoSync (default: true) means if data is not found or has expired,
        // then invoke the corresponding sync method
        autoSync: true,

        // syncInBackground (default: true) means if data expired,
        // return the outdated data first while invoking the sync method.
        // If syncInBackground is set to false, and there is expired data,
        // it will wait for the new data and return only after the sync completed.
        // (This, of course, is slower)
        syncInBackground: true,
      })
      .then(ret => {
        // found data go to then()
        setIsSignedIn(1);
        sessionStorageInstance.setEmail(ret.userid);
      })
      .catch(err => {
        // any exception including data not found
        // goes to catch()
        console.warn("Cant find thing: " + err.message);
        switch (err.name) {
          case 'NotFoundError':
            // TODO;
            setIsSignedIn(0);
            break;
          case 'ExpiredError':
            // TODO
            setIsSignedIn(0);
            break;
        }
      });
  }, []);

  useEffect(() => {
    LottieSplashScreen.hide();

    storage
      .load({
        key: 'loginState',

        // autoSync (default: true) means if data is not found or has expired,
        // then invoke the corresponding sync method
        autoSync: true,

        // syncInBackground (default: true) means if data expired,
        // return the outdated data first while invoking the sync method.
        // If syncInBackground is set to false, and there is expired data,
        // it will wait for the new data and return only after the sync completed.
        // (This, of course, is slower)
        syncInBackground: true,
      })
      .then(ret => {
        // found data go to then()
        setIsSignedIn(1);
        sessionStorageInstance.setEmail(ret.userid);
      })
      .catch(err => {
        // any exception including data not found
        // goes to catch()
        console.warn("Cant find thing: " + err.message);
        switch (err.name) {
          case 'NotFoundError':
            // TODO;
            setIsSignedIn(0);
            break;
          case 'ExpiredError':
            // TODO
            setIsSignedIn(0);
            break;
        }
      });
  }, [isSignedIn]);

  function handleLogOut() {
    sessionStorageInstance.setEmail('');
    setIsSignedIn(0);
    storage.remove({
      key: 'loginState'
    });
  }


  return (
    <View style={{ flex: 1 }}>
      {(isSignedIn === 2) &&
        <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }} />
      }
      {(isSignedIn === 0) && <SignInOrUpView updateIsSignedIn={setIsSignedIn} />}
      {(isSignedIn === 1) && <Routes onLogoutButtonPressed={handleLogOut}/>}
    </View>
  );
}



export default App;