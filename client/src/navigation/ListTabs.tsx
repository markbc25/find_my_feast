import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favorites from '../screens/ListView/Favorites';
import DoNotShow from '../screens/ListView/DoNotShow';
import CurrentLiked from '../components/CurrentLiked/CurrentLiked';
import { FC } from 'react';

const Tab = createMaterialTopTabNavigator();

const ListTabs: FC = () => {
  return (
    <Tab.Navigator   screenOptions={{
                           tabBarActiveTintColor: '#1faf2e',
                           tabBarInactiveTintColor: 'gray',
                           tabBarStyle: {backgroundColor: 'white'},
                           tabBarIndicatorStyle: {backgroundColor: '#509e11'},
                           tabBarLabelStyle: {textTransform: 'none', fontSize: 17},
                      }}>
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Current Likes" component={CurrentLiked} />
      <Tab.Screen name="Do Not Show" component={DoNotShow} />
    </Tab.Navigator>
  );
}

export default ListTabs;