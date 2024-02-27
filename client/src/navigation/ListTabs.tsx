import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favorites from '../screens/ListView/Favorites';
import DoNotShow from '../screens/ListView/DoNotShow';
import { FC } from 'react';

const Tab = createMaterialTopTabNavigator();

const ListTabs: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Do Not Show" component={DoNotShow} />
    </Tab.Navigator>
  );
}

export default ListTabs;