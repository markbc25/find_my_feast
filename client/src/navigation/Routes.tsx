import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PreferencesView from "../screens/PreferencesView/PreferencesView";
import HomeView from "../screens/HomeView/HomeView";
import ListTabs from "./ListTabs";
import ProfileScreen from "../screens/ProfileView/ProfileView";

const Tab = createBottomTabNavigator();

const Routes = () => {
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
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
              {
                "display": "flex"
              },
              null
          ]
        })}
      >
        <Tab.Screen name="Home" options={{headerShown: false}} component={HomeView} />
        <Tab.Screen name="Lists" component={ListTabs} />
        <Tab.Screen name="Preferences" component={PreferencesView} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
