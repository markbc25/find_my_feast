import React, { useRef } from "react";
import { View, Text, Dimensions } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PreferencesView from "../screens/PreferencesView/PreferencesView";
import HomeView from "../screens/HomeView/HomeView";
import ListTabs from "./ListTabs";
import ProfileScreen from "../screens/ProfileView/ProfileView";
import EStyleSheet from 'react-native-extended-stylesheet';
import SessionStorageService from '../storage/SessionStorage/SessionStorage.js';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
EStyleSheet.build({ $rem: window_width / 380 });

const Tab = createBottomTabNavigator();

interface RoutesProps {
  onLogoutButtonPressed: Function,
}

const Routes = (props: RoutesProps) => {

  const homeViewRef = useRef();

  const preferencesUpdated = () => {
    refetchCardsInHome();
  };

  const refetchCardsInHome = () => {
    homeViewRef.current.updateRestaurantCards();
  };


  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Lists") {
              iconName = "bookmark";
            } else if (route.name === "Preferences") {
              iconName = "gear"
            } else if (route.name === "Profile") {
              iconName = "user-circle"
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#509e11",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
            {

              'backgroundColor': '#f6f3f3',
              'display': 'flex',
              'borderColor': '#f6f3f3',
              height: 0.06 * window_height,
            },
            null
          ]
        })}
      >

        <Tab.Screen name="Home" options={{ headerShown: false }} >
          {() => <HomeView ref={homeViewRef} />}
        </Tab.Screen>
        <Tab.Screen name="Lists" options={{ headerShown: false }} component={ListTabs} />
        <Tab.Screen name="Preferences" options={{ headerShown: false }}>
          {() => <PreferencesView onActionButtonClick={preferencesUpdated} />}
        </Tab.Screen>
        {/* <Tab.Screen name="Preferences" options={{ headerShown: false }} component={PreferencesView} /> */}
        <Tab.Screen name="Profile" options={{ headerShown: false }}>
          {() => <ProfileScreen onActionButtonClicked = {preferencesUpdated} onLogoutButtonPressed={props.onLogoutButtonPressed} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
