import React from 'react';
import { useState, useEffect } from "react";
import { Text, View, Button, Pressable, Dimensions, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
EStyleSheet.build({ $rem: window_width / 380 });

interface ToggleableButtonProps { 
    textValue: string,
    filterValue:  any,
    onClick: Function,
}

const ToggleableButton = (props: ToggleableButtonProps) => {
    const [isEnabled, setIsEnabled] = useState(false);

    let buttonColor = '#000000';

    const onButtonPress = () => {
        setIsEnabled((isEnabled => !isEnabled));
    };

    useEffect(() => {
        props.onClick(props.filterValue, isEnabled);
      }, [isEnabled]);
      

    return (
        <View >
            <Pressable
                onPress={onButtonPress}
                style={{
                    justifyContent: 'center',
                    alignItems: 'spaceBetween',
                    borderColor: isEnabled ? '0a6200' : '#402b1f',
                }}
            >
                <Text style={{
                    backgroundColor: '#f6f3f3',
                    color: '#402b1f',
                    paddingHorizontal: 0.03 * window_width,
                    paddingVertical: 0.01 * window_height,
                    borderWidth: isEnabled ? 0.004 * window_width : 0.75,
                    borderStyle: 'solid',
                    fontSize: 0.035 * window_width,
                    fontWeight: isEnabled ? '600' : '400',
                    borderRadius: 7,
                    justifyContent: 'center'
                }}
                >
                    {props.textValue}
                </Text>
            </Pressable>
        </View>

    );
};

export default ToggleableButton;
