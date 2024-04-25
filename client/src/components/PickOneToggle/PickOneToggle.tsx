import React, { useState, useEffect } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

interface PickOneToggleProps {
   onSwitch: Function,
   optionOne: string,
   optionTwo: string,
   displayOptionOne: string,
   displayOptionTwo: string
}

const PickOneToggle = (props: PickOneToggleProps) => {
   const [isFirstOption, setIsFirstOption] = useState(false);

   const toggleSwitch = () => {
      setIsFirstOption(isFirstOption => !isFirstOption);
      console.log("first option: " + isFirstOption);
   }

   useEffect(() => {
      if (isFirstOption) {
         props.onSwitch(props.optionTwo);
      }
      else {
         props.onSwitch(props.optionOne);
      }
   }, [isFirstOption]);

   return (
      <View style={{
         paddingTop: 20,
         paddingBottom: 20,
         paddingHorizontal: 10,
         alignItems: 'stretch',
         flexDirection: 'row',
         justifyContent: 'space-between',
         flex: 0,
         borderBottomWidth: 1,
         borderBottomColor: '#c1c1c1',
      }}>
         <Text
            style={{
               fontSize: 18,
               paddingTop: 10,
               color: '#412c1f',
               justifyContent: 'center',
            }}>
            {props.displayOptionOne}
         </Text>

         <Switch style={{}}
            trackColor={{ false: '#aad784', true: '#aad784' }}
            thumbColor={'#1faf2e'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isFirstOption}
         />

         <Text
            style={{
               fontSize: 18,
               paddingTop: 10,
               color: '#412c1f',
               justifyContent: 'center',
            }}>
            {props.displayOptionTwo}
         </Text>

      </View>


   );
};


export default PickOneToggle;
