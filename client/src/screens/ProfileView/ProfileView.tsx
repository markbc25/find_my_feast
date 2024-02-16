import React from 'react';
import {Text, View, Button} from 'react-native';
import TextInput from '../../../src/components/TextInput/TextInput';
import LineBreakIcon from '../../../src/components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../../src/components/ToggleableSetting/ToggleableSetting';

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <View style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignSelf: 'stretch',
            paddingTop: 30,
            paddingBottom: 10,
        }}>
          <Text
            style = {{
                color: '#402b1f',
                fontSize: 35,
                paddingLeft: 30,
                fontWeight: 'bold',
            }}>
                Profile
          </Text>
        </View>

        <View style = {{
            justifyContent: 'center',
            alignSelf: 'stretch',
            padding: 15,
        }}>
            <TextInput fieldName = "USERNAME" textValue = "John Smith"></TextInput>
            <TextInput fieldName = "EMAIL" textValue = "johnsmith@email.com"></TextInput>
            <TextInput fieldName = "PASSWORD" textValue = "*********"></TextInput>
        </View>

        <View style = {{
            padding: 20,
            alignSelf: 'stretch',
            justifyContent: 'center',
        }}>
            <LineBreakIcon></LineBreakIcon>
        </View>


        <View style = {{
            justifyContent: 'center',
            alignSelf: 'stretch',
            padding: 15,
            }}>
                 <ToggleableSetting textValue = "Vegetarian"></ToggleableSetting>
                 <ToggleableSetting textValue = "Pescatarian"></ToggleableSetting>
                 <ToggleableSetting textValue = "Vegan"></ToggleableSetting>
                 <ToggleableSetting textValue = "Gluten Free"></ToggleableSetting>
        </View>
    </View>
  );
};

export default ProfileScreen;