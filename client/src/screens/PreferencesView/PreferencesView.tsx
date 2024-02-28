import React from 'react';
import {Text, View, Button, Image,  ScrollView, SafeAreaView, StyleSheet} from 'react-native';
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

    <ScrollView contentContainerStyle={{
                 flexGrow: 1,
               }}>


    <View style = {{flexGrow: 1}}>


       <View style = {{flex: 1, alignSelf: 'stretch', paddingHorizontal: 30, paddingVertical: 15, paddingTop: 45}}>
               <ScreenTitle textValue = 'Filters'></ScreenTitle>
       </View>


        <View style = {{flex: 1, justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 30, paddingVertical: 30}}>
            <SectionTitle textValue = 'Price'></SectionTitle>

            <View style = {{justifyContent: 'flexStart', flexDirection: 'row', alignSelf: 'flexStart', width: '100%', alignItems: 'flexStart', gap: 20, paddingVertical: 15}}>
              <ToggleableButton textValue = '$'></ToggleableButton>
              <ToggleableButton textValue = '$$'></ToggleableButton>
              <ToggleableButton textValue = '$$$'></ToggleableButton>
              <ToggleableButton textValue = '$$$$'></ToggleableButton>
            </View>
        </View>

         <View style = {{flex: 1, justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 30, paddingVertical: 30}}>
                    <SectionTitle textValue = 'Distance'></SectionTitle>

                    <View style = {{justifyContent: 'center', flexDirection: 'row',}}>
                        <Slider></Slider>
                    </View>
         </View>

          <View style = {{flex: 1, justifyContent: 'center', alignSelf: 'stretch', alignItems: 'center', paddingHorizontal: 30, paddingVertical: 30,}}>
                     <SectionTitle textValue = 'Cuisine'></SectionTitle>

                     <View style = {{flex: 1, justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap', gap: 10,  paddingTop: 20, width: '100%'}}>
                         <View style = {{flex: 1, flexDirection: 'row', gap: 7, width: '100%', justifyContent: 'flexStart'}}>
                            <ToggleableButtonImage textValue = 'American' image = 'require(../../resources.burger.png)' style = {{flex: 1}}/>
                            <ToggleableButtonImage textValue = 'Barbecue' image = 'require(../../resources.burger.png)' style = {{flex: 1}}/>
                            <ToggleableButtonImage textValue = 'Chinese' image = 'require(../../resources.burger.png)' style = {{flex: 1}}/>
                         </View>

                         <View style = {{flex: 1, flexDirection: 'row', gap: 7, width: '100%', justifyContent: 'flexStart'}}>
                            <ToggleableButtonImage textValue = 'French' image = 'require(../../resources.burger.png)' style = {{flex: 1}}/>
                            <ToggleableButtonImage textValue = 'Hamburger' image = 'require(../../resources.burger.png)' style = {{padding: 0}}/>
                            <ToggleableButtonImage textValue = 'Indian' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                         </View>

                         <View style = {{flex: 1, flexDirection: 'row', gap: 7, width: '100%', justifyContent: 'flexStart'}}>
                            <ToggleableButtonImage textValue = 'Mexican' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                            <ToggleableButtonImage textValue = 'Pizza' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                            <ToggleableButtonImage textValue = 'Seafood' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                        </View>

                        <View style = {{flex: 1, flexDirection: 'row', gap: 7, width: '100%', justifyContent: 'flexStart'}}>
                          <ToggleableButtonImage textValue = 'Steak' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                           <ToggleableButtonImage textValue = 'Italian' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                           <ToggleableButtonImage textValue = 'Japanese' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                        </View>


                        <View style = {{flex: 1, flexDirection: 'row', gap: 7, width: '100%', justifyContent: 'flexStart'}}>
                                <ToggleableButtonImage textValue = 'Sushi' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                                <ToggleableButtonImage textValue = 'Thai' image = 'require(../../resources.burger.png)' style = {{padding: 100}}/>
                        </View>

                     </View>
          </View>

          <View style = {{flex: 1, width: '100%', paddingVertical: 10}}>
            <ActionButton textValue = 'Confirm'/>
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
