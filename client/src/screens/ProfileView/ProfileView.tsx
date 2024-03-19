import React from 'react';
import {Text, View, Button} from 'react-native';
import InputText from '../../../src/components/InputText/InputText';
import LineBreakIcon from '../../../src/components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../../src/components/ToggleableSetting/ToggleableSetting';
import ScreenTitle from '../../../src/components/ScreenTitle/ScreenTitle';
import SectionTitle from '../../../src/components/SectionTitle/SectionTitle';
import ActionButton from '../../../src/components/ActionButton/ActionButton';

import Share from 'react-native-share';
//temporary for testing, this function will go to other screen
const openSMSMenu = async() => {
    const shareOptions = {
        message: "hey hey hey",
    }

    try {
        const shareResponse = await Share.open(shareOptions);
    }
    catch(error) {console.log('error: ', error)};
 };


const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: '',
//         alignItems: 'center',
      }}>

        <View style = {{flex: 0.5}}>
            <ScreenTitle textValue = 'Profile'></ScreenTitle>
        </View>


        <View style = {{flex: 0.5, justifyContent: 'center'}}>
            <SectionTitle textValue = 'Change Name'></SectionTitle>

            <View style = {{
                justifyContent: 'flex-start',
                alignSelf: 'stretch',
                padding: 20,
                }}>
                <InputText fieldName = 'DISPLAY NAME' textValue = "John Smith"></InputText>
            </View>
        </View>


    <View style = {{flex: 0.25}}>
        <View style = {{
                padding: 20,
                alignSelf: 'stretch',
                justifyContent: 'center',
                flex: 1,
            }}>
            <LineBreakIcon></LineBreakIcon>
        </View>
    </View>


    <View style = {{flex: 1.5}}>
        <SectionTitle textValue = "Dietary Preferences"></SectionTitle>

        <View style = {{
            justifyContent: 'center',
            alignSelf: 'stretch',
            padding: 15,
            paddingBottom: 60,
            flex: 1,
            }}>
                 <ToggleableSetting textValue = "Vegetarian"></ToggleableSetting>
                 <ToggleableSetting textValue = "Pescatarian"></ToggleableSetting>
                 <ToggleableSetting textValue = "Vegan"></ToggleableSetting>
                 <ToggleableSetting textValue = "Gluten Free"></ToggleableSetting>
        </View>
    </View>

    <View style = {{flex: 0.5}}>
            <ActionButton textValue = 'Confirm' onPress = {openSMSMenu}></ActionButton>
    </View>
  </View>
  );
};

export default ProfileScreen;