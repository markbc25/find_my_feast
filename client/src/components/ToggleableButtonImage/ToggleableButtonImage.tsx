import React from 'react';
import { useState, useEffect } from "react";
import {Text, View, Button, Pressable, Image} from 'react-native';

interface ToggleableButtonImageProps {}


const ToggleableButtonImage = (props: textValue) => {

  const [isEnabled, setIsEnabled] = useState(false);

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
                        backgroundColor: 'white',
                        maxHeight: 90,
                        maxWidth: 90,
                        minWidth: 90,
                        minHeight: 90,
                         borderWidth: 0.75,
                         borderColor: isEnabled ? '0a6200' : '#402b1f',
                         borderStyle: 'solid',
                        backgroundColor: isEnabled ? '#9cc878' : '#f6f3f3',
                        borderRadius: 7,
                    }}
        >
            <Text style = {{
                            color: isEnabled ? '#0a6200' : '#402b1f',
//                             paddingHorizontal: 3,
                            paddingVertical: 3,

                            fontSize: 16,
                            alignSelf: 'center',

                            }}>
                           {props.textValue}
           </Text>

           <Image style = {{
                            alignSelf: 'center',
                            maxWidth: 35,
                            height: 35,
                           }} source={require('../../resources/burger.png')}/>

        </Pressable>
    </View>

    );
 };

export default ToggleableButtonImage;
