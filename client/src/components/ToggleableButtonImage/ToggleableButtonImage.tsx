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
                        maxHeight: 80,
                        maxWidth: 80,
                        minWidth: 80,
                        minHeight: 80,
                        backgroundColor: isEnabled ? '#5bc009' : 'white',
                    }}
        >
            <Text style = {{
//                             backgroundColor: isEnabled ? 'white' : '#5bc009',
                            color: isEnabled ? 'white' : '#5bc009',
                            paddingHorizontal: 3,
                            paddingVertical: 3,
                             borderRadius: 5,
                             fontSize: 14,
                             alignSelf: 'center'
                            }}>
                           {props.textValue}
           </Text>

           <Image style = {{
                            alignSelf: 'center',
                            maxWidth: 35,
                            height: 35,
                           }} source={require('../../resources/burger.jpg')}/>
        </Pressable>
    </View>

    );
 };

export default ToggleableButtonImage;
