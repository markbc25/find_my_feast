import React from 'react';
import { useState, useEffect } from "react";
import { Text, View, Button, Image, ScrollView, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import InputText from '../../../src/components/InputText/InputText';
import LineBreakIcon from '../../../src/components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../../src/components/ToggleableSetting/ToggleableSetting';
import ScreenTitle from '../../../src/components/ScreenTitle/ScreenTitle';
import SectionTitle from '../../../src/components/SectionTitle/SectionTitle';
import ActionButton from '../../../src/components/ActionButton/ActionButton';
import ToggleableButton from '../../../src/components/ToggleableButton/ToggleableButton';
import ToggleableButtonImage from '../../../src/components/ToggleableButtonImage/ToggleableButtonImage';
import Slider from '../../../src/components/Slider/Slider';
import EStyleSheet from 'react-native-extended-stylesheet';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
EStyleSheet.build({ $rem: window_width / 380 });



interface PreferencesViewProps { }


const PreferencesView: FC<PreferencesViewProps> = () => {
  let [includedTypes, setIncludedTypes] = useState([]);

  function adjustPreferences(newValue: string, buttonEnabled: boolean) {
    if (buttonEnabled) {
      setIncludedTypes([
        newValue,
        ...includedTypes // Put old items at the end
      ]);
    }
  }

  let body = {
    "includedTypes": [],
    "maxResultCount": 15,
    "locationRestriction": {
      "circle": {
        "center": {
          "latitude": 30.601389,
          "longitude": -96.314445
        },
        "radius": 5000
      }
    },
    "rankPreference": "DISTANCE"
  }



  return (

    <ScrollView contentContainerStyle={{
      flexGrow: 1,
    }}>


      <View style={{ flexGrow: 1 }}>


        <View style={{ flex: 1, alignSelf: 'stretch', paddingHorizontal: 0.03 * window_width, paddingVertical: 0.015 * window_height, paddingTop: 45 }}>
          <ScreenTitle textValue='Filters'></ScreenTitle>
        </View>


        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 0.05 * window_width, paddingVertical: 0.015 * window_height }}>
          <SectionTitle textValue='Price'></SectionTitle>

          <View style={{ justifyContent: 'flexStart', flexDirection: 'row', alignSelf: 'flexStart', width: '100%', alignItems: 'flexStart', gap: 0.08 * window_width, paddingVertical: 15 }}>
            <ToggleableButton textValue='$'></ToggleableButton>
            <ToggleableButton textValue='$$'></ToggleableButton>
            <ToggleableButton textValue='$$$'></ToggleableButton>
            <ToggleableButton textValue='$$$$'></ToggleableButton>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 0.05 * window_width, paddingVertical: 0.05 * window_height }}>
          <SectionTitle textValue='Distance'></SectionTitle>

          <View style={{ justifyContent: 'center', flexDirection: 'row', }}>
            <Slider></Slider>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'stretch', alignItems: 'center', paddingHorizontal: 0.05 * window_width, paddingVertical: 0.05 * window_height }}>
          <SectionTitle textValue='Cuisine'></SectionTitle>

          <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', flexWrap: 'none', gap: 10, paddingTop: 0.03 * window_height, width: '100%' }}>
            <View style={{ flex: 1, flexDirection: 'row', gap: 0.02 * window_width, width: '100%', justifyContent: 'flexStart' }}>
              <ToggleableButtonImage textValue='American' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='american_restaurant' style={{ flex: 1 }} />
              <ToggleableButtonImage textValue='Barbecue' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='barbecue_restaurant' style={{ flex: 1 }} />
              <ToggleableButtonImage textValue='Chinese' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='chinese_restaurant' style={{ flex: 1 }} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', gap: 0.02 * window_width, width: '100%', justifyContent: 'flexStart' }}>
              <ToggleableButtonImage textValue='French' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='french_restaurant' style={{ flex: 1 }} />
              <ToggleableButtonImage textValue='Hamburger' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='hamburger_restaurant' style={{ padding: 0 }} />
              <ToggleableButtonImage textValue='Indian' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='indian_restaurant' style={{ padding: 100 }} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', gap: 0.02 * window_width, width: '100%', justifyContent: 'flexStart' }}>
              <ToggleableButtonImage textValue='Mexican' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='mexican_restaurant' style={{ padding: 100 }} />
              <ToggleableButtonImage textValue='Pizza' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='pizza_restaurant' style={{ padding: 100 }} />
              <ToggleableButtonImage textValue='Seafood' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='seafood_restaurant' style={{ padding: 100 }} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', gap: 0.02 * window_width, width: '100%', justifyContent: 'flexStart' }}>
              <ToggleableButtonImage textValue='Steak' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='steak_house' style={{ padding: 100 }} />
              <ToggleableButtonImage textValue='Italian' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='italian_restaurant' style={{ padding: 100 }} />
              <ToggleableButtonImage textValue='Japanese' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='japanese_restaurant' style={{ padding: 100 }} />
            </View>


            <View style={{ flex: 1, flexDirection: 'row', gap: 0.02 * window_width, width: '100%', justifyContent: 'flexStart' }}>
              <ToggleableButtonImage textValue='Sushi' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='sushi_restaurant' style={{ padding: 100 }} />
              <ToggleableButtonImage textValue='Thai' image='require(../../resources.burger.png)' onClick={adjustPreferences} filterValue='thai_restaurant' style={{ padding: 100 }} />
            </View>

          </View>
        </View>

        <View style={{ flex: 1, width: '100%', paddingVertical: 10 }}>
          <ActionButton textValue='Confirm' />
        </View>

      </View>

    </ScrollView>
  );

};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
  },
});
export default PreferencesView;
