import React from 'react';
import { useState, useEffect } from "react";
import { Text, View, Button, Pressable, Dimensions, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
EStyleSheet.build({ $rem: window_width / 380 });

interface ToggleableButtonProps {
    textValue: string,
    filterValue: any,
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
                    borderColor: 'transparent',
                    backgroundColor: isEnabled ? '#1faf2e' : 'white',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    alignItems: 'center',

                    shadowColor: isEnabled ? '#5bbb09' : 'black',
                    shadowRadius: 5,
                    shadowOpacity: 100,
                    elevation: 5,
                    shadowOffset: {
                        width: 10,
                        height: -10,
                    }
                }}
            >
                <Text style={{
                    color: isEnabled ? 'white' : '#402b1f',
                    paddingHorizontal: 0.03 * window_width,
                    paddingVertical: 0.01 * window_height,
                    fontSize: 16.5,
                    fontWeight: isEnabled ? '600' : '400',
                }}
                >
                    {props.textValue}
                </Text>
            </Pressable>
        </View>

    );
};

export default ToggleableButton;
