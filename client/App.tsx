/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

  const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : '#f6f3f3',
//          backgroundColor: 'orange',

  };

  return (


    //  <SignUpView></SignUpView>
    //  <Routes/>


  );
}



export default App;