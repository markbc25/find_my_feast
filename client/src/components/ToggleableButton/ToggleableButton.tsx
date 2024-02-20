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
            style = {{ justifyContent: 'center',
                        alignItems: 'spaceBetween',
                        padding: 20,
                    }}

        >
            <Text style = {{
                            backgroundColor: isEnabled ? '#5bc009' : 'white' ,
                            color: isEnabled ?  'white' : '#5bc009',
                            paddingHorizontal: 20,
                            paddingVertical: 5,
                             borderRadius: 5,
                             fontSize: 15,
                             fontWeight: 'bold',
                            }}
            >
                           {props.textValue}
           </Text>


        </Pressable>
    </View>

    );
 };

export default ToggleableButton;
