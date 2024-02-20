import React from 'react';
import { useState, useEffect } from "react";
import {Text, View, Button, Pressable} from 'react-native';

interface ToggleableButtonProps {}


<<<<<<< Updated upstream
const ToggleableButton = (props: textValue) => {
  const [isEnabled, setIsEnabled] = useState(true);
=======
const ToggleableButton = (props: textValue, image) => {
  const [isEnabled, setIsEnabled] = useState(false);
>>>>>>> Stashed changes
  let buttonColor = '#000000';


  const onButtonPress = () => {
       setIsEnabled((isEnabled => !isEnabled));
  };

  return (
    <View>
        <Pressable
            onPress = {onButtonPress}
            style = {{ justifyContent: 'center',
                        alignItems: 'flex-start',
                        padding: 20}}
        >
            <Text style = {{
                            backgroundColor: isEnabled ? '#5bc009' : 'white' ,
                            color: isEnabled ?  'white' : '#5bc009',
                            paddingHorizontal: 20,
                            paddingVertical: 5,
                             borderRadius: 5,
                            }}>
                           {props.textValue}
           </Text>
        </Pressable>
    </View>

    );
 };

export default ToggleableButton;
