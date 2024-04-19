import React from 'react';
import { useState, useEffect } from "react";
import { Text, View, Button, Image, ScrollView, SafeAreaView, StyleSheet, Dimensions, setState } from 'react-native';

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
import preferencesAndRestaurantsInstance from '../../storage/SessionStorage/PreferencesAndRestaurants';


const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
EStyleSheet.build({ $rem: window_width / 380 });


interface PreferencesViewProps {
  onActionButtonClick: Function,
}

const PreferencesView: FC<PreferencesViewProps> = (props: PreferencesViewProps) => {
  let [includedTypes, setIncludedTypes] = useState([]);
  let [includedPriceLevels, setIncludedPriceLevels] = useState([]);
  let [isPressed, setIsPressed] = useState(false);
  let [radius, setRadius] = useState(30);



  function updateIncludedTypes(newValue: string, buttonEnabled: boolean) {

    if (buttonEnabled) {
      setIncludedTypes([
        newValue,
        ...includedTypes // Put old items at the end
      ]);
    }

    else {
      let filteredArray = includedTypes.filter(item => item !== newValue);
      setIncludedTypes(filteredArray);
    }

  }

  function updateIncludedPriceLevels(newValue: number, buttonEnabled: boolean) {

    if (buttonEnabled) {
      setIncludedPriceLevels([
        newValue,
        ...includedPriceLevels // Put old items at the end
      ]);
    }

    else {
      let filteredArray = includedPriceLevels.filter(item => item !== newValue);
      setIncludedPriceLevels(filteredArray);
    }

  }

  useEffect(() => {
    preferencesAndRestaurantsInstance.setIncludedTypes(includedTypes);

  }, [includedTypes]);

  useEffect(() => {
    preferencesAndRestaurantsInstance.setIncludedPriceLevels(includedPriceLevels);

  }, [includedPriceLevels]);


  useEffect(() => {
    props.onActionButtonClick();
  }, [isPressed]);

  function updateRadius(newRadius: number) {
    // setRadius(newRadius * 0.000621371);
    preferencesAndRestaurantsInstance.setRadius(newRadius * 1609.34); // Convert miles to meters
  }



  return (

    <ScrollView contentContainerStyle={{
      flexGrow: 1,
    }}>


      <View style={{ flexGrow: 1 }}>


        <View style={{ alignSelf: 'stretch', paddingHorizontal: 30 }}>
          <ScreenTitle textValue='Filters'></ScreenTitle>
        </View>


        <View style={{ justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 30 }}>
          <SectionTitle textValue='Price'></SectionTitle>

          <View style={{ justifyContent: 'flexStart', flexDirection: 'row', alignSelf: 'flexStart', width: '100%', alignItems: 'flexStart', gap: 30, paddingVertical: 20 }}>
            <ToggleableButton textValue='$' filterValue={'PRICE_LEVEL_INEXPENSIVE'} onClick={updateIncludedPriceLevels}></ToggleableButton>
            <ToggleableButton textValue='$$' filterValue={'PRICE_LEVEL_MODERATE'} onClick={updateIncludedPriceLevels}></ToggleableButton>
            <ToggleableButton textValue='$$$' filterValue={'PRICE_LEVEL_EXPENSIVE'} onClick={updateIncludedPriceLevels}></ToggleableButton>
            <ToggleableButton textValue='$$$$' filterValue={'PRICE_LEVEL_VERY_EXPENSIVE'} onClick={updateIncludedPriceLevels}></ToggleableButton>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 30, paddingVertical: 30 }}>
          <SectionTitle textValue='Distance'></SectionTitle>

          <View style={{ justifyContent: 'center', flexDirection: 'row', }}>
            <Slider onValueChange={updateRadius}></Slider>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'stretch', alignItems: 'center', paddingHorizontal: 30, paddingVertical: 20 }}>
          <SectionTitle textValue='Cuisine'></SectionTitle>

          <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', flexWrap: 'none', gap: 10, paddingTop: 0.03 * window_height, width: '100%' }}>
            <View style={{ flex: 1, flexDirection: 'row', gap: 0.02 * window_width, width: '100%', justifyContent: 'flexStart' }}>

              <ToggleableButtonImage textValue='American' image='american' onClick={updateIncludedTypes} filterValue='american_restaurant' style={{ flex: 1 }} />
              <ToggleableButtonImage textValue='Barbecue' image='barbecue' onClick={updateIncludedTypes} filterValue='barbecue_restaurant' style={{ flex: 1 }} />
              <ToggleableButtonImage textValue='Chinese' image='chinese' onClick={updateIncludedTypes} filterValue='chinese_restaurant' style={{ flex: 1 }} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', gap: 0.02 * window_width, width: '100%', justifyContent: 'flexStart' }}>
              <ToggleableButtonImage textValue='French' image='french' onClick={updateIncludedTypes} filterValue='french_restaurant' style={{ flex: 1 }} />
              <ToggleableButtonImage textValue='Hamburger' image='burger' onClick={updateIncludedTypes} filterValue='hamburger_restaurant' style={{ padding: 0 }} />
              <ToggleableButtonImage textValue='Indian' image='indian' onClick={updateIncludedTypes} filterValue='indian_restaurant' style={{ padding: 100 }} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', gap: 0.02 * window_width, width: '100%', justifyContent: 'flexStart' }}>
              <ToggleableButtonImage textValue='Mexican' image='mexican' onClick={updateIncludedTypes} filterValue='mexican_restaurant' style={{ padding: 100 }} />
              <ToggleableButtonImage textValue='Pizza' image='pizza' onClick={updateIncludedTypes} filterValue='pizza_restaurant' style={{ padding: 100 }} />
              <ToggleableButtonImage textValue='Seafood' image='seafood' onClick={updateIncludedTypes} filterValue='seafood_restaurant' style={{ padding: 100 }} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', gap: 0.02 * window_width, width: '100%', justifyContent: 'flexStart' }}>
              <ToggleableButtonImage textValue='Steak' image='steak' onClick={updateIncludedTypes} filterValue='steak_house' style={{ padding: 100 }} />
              <ToggleableButtonImage textValue='Italian' image='italian' onClick={updateIncludedTypes} filterValue='italian_restaurant' style={{ padding: 100 }} />
              <ToggleableButtonImage textValue='Japanese' image='japanese' onClick={updateIncludedTypes} filterValue='japanese_restaurant' style={{ padding: 100 }} />

            </View>

            <View style={{ flex: 1, flexDirection: 'row', gap: 0.02 * window_width, width: '100%', justifyContent: 'flexStart' }}>
              <ToggleableButtonImage textValue='Sushi' image='sushi' onClick={updateIncludedTypes} filterValue='sushi_restaurant' style={{ padding: 100 }} />
              <ToggleableButtonImage textValue='Thai' image='thai' onClick={updateIncludedTypes} filterValue='thai_restaurant' style={{ padding: 100 }} />

            </View>
          </View>
        </View>


        <View style={{ flex: 0, width: '90%', paddingVertical: 30, alignSelf: 'center', justifyContent: 'flex-end' }}>
          <ActionButton textValue='Confirm' onPress={() => setIsPressed(!isPressed)} />
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




