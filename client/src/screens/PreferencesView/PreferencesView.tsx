import React from 'react';
import {Text, View, Button} from 'react-native';
import InputText from '../../../src/components/InputText/InputText';
import LineBreakIcon from '../../../src/components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../../src/components/ToggleableSetting/ToggleableSetting';
import ScreenTitle from '../../../src/components/ScreenTitle/ScreenTitle';
import SectionTitle from '../../../src/components/SectionTitle/SectionTitle';
import ActionButton from '../../../src/components/ActionButton/ActionButton';
import ToggleableButton from '../../../src/components/ToggleableButton/ToggleableButton';


interface PreferencesViewProps {}

const PreferencesView: FC<PreferencesViewProps> = () => (
    <View style={{
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center',
               }}>

       <View style = {{flex: 0.5, alignSelf: 'stretch', backgroundColor: 'blue'}}>
               <ScreenTitle textValue = 'Preferences'></ScreenTitle>
       </View>


        <View style = {{flex: 1, justifyContent: 'center', alignSelf: 'stretch', backgroundColor: 'pink'}}>
            <SectionTitle textValue = 'Price'></SectionTitle>

            <View style = {{justifyContent: 'spaceBetween', flexDirection: 'row', backgroundColor: 'red'}}>
              <ToggleableButton textValue = '$'></ToggleableButton>
              <ToggleableButton textValue = '$$'></ToggleableButton>
              <ToggleableButton textValue = '$$$'></ToggleableButton>
              <ToggleableButton textValue = '$$$$'></ToggleableButton>
            </View>
        </View>

         <View style = {{flex: 1, justifyContent: 'center', alignSelf: 'stretch', backgroundColor: 'green'}}>
                    <SectionTitle textValue = 'Distance'></SectionTitle>

                    <View style = {{justifyContent: 'spaceBetween', flexDirection: 'row', backgroundColor: 'red'}}>

                    </View>
                </View>




    </View>

);

export default PreferencesView;
