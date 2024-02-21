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
                                backgroundColor: isEnabled ? '#5bc009' : '#f6f3f3' ,
                                color: '#412c1f',
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                borderWidth: 0.75,
                                borderColor: '#412c1f',
                                borderStyle: 'solid',
                                fontSize: 15,
                                fontWeight: 'bold',
                                 borderRadius: 7,
                            }}
            >
                           {props.textValue}
           </Text>


        </Pressable>
    </View>

    );
 };

export default ToggleableButton;
