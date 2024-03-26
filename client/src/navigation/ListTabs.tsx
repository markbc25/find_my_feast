import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favorites from '../screens/ListView/Favorites';
import DoNotShow from '../screens/ListView/DoNotShow';
import CurrentLiked from "../screens/ListView/CurrentLiked";
import { FC } from 'react';

const Tab = createMaterialTopTabNavigator();

const ListTabs: FC = () => {
  return (
    <Tab.Navigator   screenOptions={{
                           tabBarActiveTintColor: '#402b1f',
                           tabBarInactiveTintColor: 'gray',
                           tabBarStyle: {backgroundColor: '#f6f3f3'},
                           tabBarIndicatorStyle: {backgroundColor: '#509e11'},
                           tabBarLabelStyle: {textTransform: 'none', fontSize: 17},
                      }}>
      <Tab.Screen name="Current Liked" component={CurrentLiked}/>
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Do Not Show" component={DoNotShow} />
    </Tab.Navigator>
  );
}

export default ListTabs;