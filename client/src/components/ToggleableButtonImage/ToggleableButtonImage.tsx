import React from 'react';
import { useState, useEffect } from "react";
import { Text, View, Button, Pressable, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
EStyleSheet.build({ $rem: window_width / 380 });

interface ToggleableButtonImageProps {
    textValue: string,
    filterValue: string,
    onClick: Function,
    image: string,
}


const ToggleableButtonImage = (props: ToggleableButtonImageProps) => {

    const [isEnabled, setIsEnabled] = useState(false);

    let buttonColor = '#000000';

    const Images = {
        'american': require('../../resources/american.png'),
        'burger': require('../../resources/burger.png'),
        'barbecue': require('../../resources/bbq.png'),
        'chinese': require('../../resources/chinese.png'),
        'french': require('../../resources/french.png'),
        'indian': require('../../resources/indian.png'),
        'mexican': require('../../resources/mexican.png'),
        'pizza': require('../../resources/pizza.png'),
        'seafood': require('../../resources/seafood.png'),
        'steak': require('../../resources/steak.png'),
        'italian': require('../../resources/italian.png'),
        'japanese': require('../../resources/japanese.png'),
        'sushi': require('../../resources/sushi.png'),
        'thai': require('../../resources/thai.png'),
    }
    


    const onButtonPress = () => {
        setIsEnabled((!isEnabled));
    };

    useEffect(() => {
        props.onClick(props.filterValue, isEnabled);
    }, [isEnabled]);


    return (
        <View>
            <Pressable
                onPress={() => onButtonPress()}
                style={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    height: 0.15 * window_height,
                    width: 0.28 * window_width,
                    borderWidth: isEnabled ? 2.5 : 0.75,
                    borderStyle: 'solid',
                    backgroundColor: '#f6f3f3',
                    borderRadius: 5,
                }}
            >
                <Text style={{
                    paddingVertical: 3,
                    fontSize: 17,
                    alignSelf: 'center',
                    fontWeight: isEnabled ? '700' : '400',
                    color: '#402b1f',
                }}>
                    {props.textValue}
                </Text>

                <Image style={{
                    alignSelf: 'center',
                    maxWidth: 50,
                    maxHeight: 50,
                }}
                    // source={require(${props.image})}/>
                    source={Images[props.image]} />

            </Pressable>
        </View>

    );
};

export default ToggleableButtonImage;
