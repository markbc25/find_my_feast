import React from 'react';
import {Text, View, Button} from 'react-native';
import InputText from '../../../src/components/InputText/InputText';
import LineBreakIcon from '../../../src/components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../../src/components/ToggleableSetting/ToggleableSetting';
import ScreenTitle from '../../../src/components/ScreenTitle/ScreenTitle';
import SectionTitle from '../../../src/components/SectionTitle/SectionTitle';
import ActionButton from '../../../src/components/ActionButton/ActionButton';

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <ScreenTitle textValue = 'Profile'></ScreenTitle>

        <SectionTitle textValue = 'Change Name'></SectionTitle>

        <View style = {{
            justifyContent: 'center',
            alignSelf: 'stretch',
            padding: 15,
            }}>
            <InputText fieldName = 'DISPLAY NAME' textValue = "John Smith"></InputText>
            <ActionButton textValue = "Confirm"></ActionButton>
        </View>

        <View style = {{
                padding: 20,
                alignSelf: 'stretch',
                justifyContent: 'center',
            }}>
            <LineBreakIcon></LineBreakIcon>
        </View>

        <SectionTitle textValue = "Dietary Preferences"></SectionTitle>

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