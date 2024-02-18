import React from 'react';
import { useState, useEffect } from "react";
import {Text, View, Button, Pressable} from 'react-native';

interface ToggleableButtonProps {}


const ToggleableButton = (props: textValue) => {
  const [isEnabled, setIsEnabled] = useState(true);
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
                            backgroundColor: isEnabled ? 'white' : '#5bc009',
                            color: isEnabled ? '#5bc009' : 'white',
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
