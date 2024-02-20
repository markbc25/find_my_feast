import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import InputText from '../../../src/components/InputText/InputText';
import LineBreakIcon from '../../../src/components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../../src/components/ToggleableSetting/ToggleableSetting';
import ScreenTitle from '../../../src/components/ScreenTitle/ScreenTitle';
import SectionTitle from '../../../src/components/SectionTitle/SectionTitle';
import ActionButton from '../../../src/components/ActionButton/ActionButton';
import ToggleableButton from '../../../src/components/ToggleableButton/ToggleableButton';
import Slider from '../../../src/components/Slider/Slider';



interface PreferencesViewProps {}

const PreferencesView: FC<PreferencesViewProps> = () => {

    return (
    <View style={{
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center',
               }}>

       <View style = {{flex: 0.5, alignSelf: 'stretch',}}>
               <ScreenTitle textValue = 'Preferences'></ScreenTitle>
       </View>


        <View style = {{flex: 1, justifyContent: 'center', alignSelf: 'stretch', }}>
            <SectionTitle textValue = 'Price'></SectionTitle>

            <View style = {{justifyContent: 'spaceBetween', flexDirection: 'row', }}>
              <ToggleableButton textValue = '$'></ToggleableButton>
              <ToggleableButton textValue = '$$'></ToggleableButton>
              <ToggleableButton textValue = '$$$'></ToggleableButton>
              <ToggleableButton textValue = '$$$$'></ToggleableButton>
            </View>
        </View>

         <View style = {{flex: 1, justifyContent: 'center', alignSelf: 'stretch', }}>
                    <SectionTitle textValue = 'Maximum Distance'></SectionTitle>

                    <View style = {{justifyContent: 'center', flexDirection: 'row',}}>
                        <Slider></Slider>
                    </View>
         </View>
    </View>
    );

};

export default PreferencesView;
