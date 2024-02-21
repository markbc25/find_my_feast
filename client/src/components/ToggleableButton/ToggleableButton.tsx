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
                                backgroundColor: isEnabled ? '#9cc878' : '#f6f3f3',
                                color: isEnabled ? '#0a6200' : '#402b1f',
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                borderWidth: 0.75,
                                borderColor: isEnabled ? '0a6200' : '#402b1f',
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
