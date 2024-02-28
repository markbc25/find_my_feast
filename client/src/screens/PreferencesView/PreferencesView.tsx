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
import ToggleableButtonImage from '../../../src/components/ToggleableButtonImage/ToggleableButtonImage';
import Slider from '../../../src/components/Slider/Slider';



interface PreferencesViewProps {}

const PreferencesView: FC<PreferencesViewProps> = () => {

    return (
    <View style={{
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center',
               }}>

       <View style = {{flex: 0.2, alignSelf: 'stretch', }}>
               <ScreenTitle textValue = 'Filters'></ScreenTitle>
       </View>


        <View style = {{flex: 0.2, justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 30}}>
            <SectionTitle textValue = 'Price'></SectionTitle>

            <View style = {{justifyContent: 'flexStart', flexDirection: 'row', alignSelf: 'flexStart', width: '100%', alignItems: 'flexStart', gap: 20, paddingVertical: 15}}>
              <ToggleableButton textValue = '$'></ToggleableButton>
              <ToggleableButton textValue = '$$'></ToggleableButton>
              <ToggleableButton textValue = '$$$'></ToggleableButton>
              <ToggleableButton textValue = '$$$$'></ToggleableButton>
            </View>
        </View>

         <View style = {{flex: 0.4, justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 30}}>
                    <SectionTitle textValue = 'Maximum Distance'></SectionTitle>

                    <View style = {{justifyContent: 'center', flexDirection: 'row',}}>
                        <Slider></Slider>
                    </View>
         </View>

          <View style = {{flex: 1, justifyContent: 'center', alignSelf: 'stretch', alignItems: 'center', paddingHorizontal: 30}}>
                     <SectionTitle textValue = 'Cuisine'></SectionTitle>

                     <View style = {{flex: 1, justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap', gap: 5, alignItems: 'center', paddingTop: 10}}>
                         <View style = {{flex: 1, flexDirection: 'row', gap: 5,}}>
                            <ToggleableButtonImage textValue = 'American' image = 'require(../../resources.burger.png)' style = {{padding: 0}}/>
                            <ToggleableButtonImage textValue = 'Barbecue' image = 'require(../../resources.burger.png)' style = {{padding: 0}}/>
                            <ToggleableButtonImage textValue = 'Chinese' image = 'require(../../resources.burger.png)' style = {{padding: 0}}/>
                            <ToggleableButtonImage textValue = 'French' image = 'require(../../resources.burger.png)' style = {{padding: 0}}/>
                         </View>
                         <View style = {{flex: 1, flexDirection: 'row', gap: 5}}>
                            <ToggleableButtonImage textValue = 'Hamburger' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                            <ToggleableButtonImage textValue = 'Indian' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                            <ToggleableButtonImage textValue = 'Italian' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                            <ToggleableButtonImage textValue = 'Japanese' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                         </View>
                         <View style = {{flex: 1, flexDirection: 'row', gap: 5}}>
                            <ToggleableButtonImage textValue = 'Mexican' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                            <ToggleableButtonImage textValue = 'Pizza' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                            <ToggleableButtonImage textValue = 'Seafood' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                            <ToggleableButtonImage textValue = 'Steak' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                        </View>
                        <View style = {{flex: 1, flexDirection: 'row', gap: 5, alignSelf: 'flex-start'}}>
                            <ToggleableButtonImage textValue = 'Sushi' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                            <ToggleableButtonImage textValue = 'Thai' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                        </View>

                     </View>
          </View>

          <View style = {{flex: 0.3, width: '100%', paddingVertical: 10}}>
            <ActionButton textValue = 'Confirm'/>
          </View>
    </View>
    );

};

export default PreferencesView;
