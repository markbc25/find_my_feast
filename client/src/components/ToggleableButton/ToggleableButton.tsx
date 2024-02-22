import React from 'react';
import { useState, useEffect } from "react";
import {Text, View, Button, Pressable} from 'react-native';

interface ToggleableButtonProps {}


const ToggleableButton = (props: textValue, image) => {
  const [isEnabled, setIsEnabled] = useState(false);

  let buttonColor = '#000000';


  const onButtonPress = () => {
       setIsEnabled((isEnabled => !isEnabled));
  };

  return (
    <View >
        <Pressable
            onPress = {onButtonPress}
            style = {{
                        justifyContent: 'center',
                        alignItems: 'spaceBetween',
                        padding: 20,
                        borderColor: isEnabled ? '0a6200' : '#402b1f',

                    }}
        >
            <Text style = {{
                            backgroundColor : '#f6f3f3',
                            color: '#402b1f',
                            paddingHorizontal: 15,
                            paddingVertical: 5,
                            borderWidth: isEnabled ? 2 : 0.75,
                            borderStyle: 'solid',
                            fontSize: 15,
                            fontWeight: isEnabled ? '600' : '400',
                            borderRadius: 5,
                            }}
            >
                           {props.textValue}
           </Text>


        </Pressable>
    </View>

    );
 };

export default ToggleableButton;
