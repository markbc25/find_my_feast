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

        //////

        'americanActive': require('../../resources/americanActive.png'),
        'burgerActive': require('../../resources/burgerActive.png'),
        'barbecueActive': require('../../resources/bbqActive.png'),
        'chineseActive': require('../../resources/chineseActive.png'),
        'frenchActive': require('../../resources/frenchActive.png'),
        'indianActive': require('../../resources/indianActive.png'),
        'mexicanActive': require('../../resources/mexicanActive.png'),
        'pizzaActive': require('../../resources/pizzaActive.png'),
        'seafoodActive': require('../../resources/seafoodActive.png'),
        'steakActive': require('../../resources/steakActive.png'),
        'italianActive': require('../../resources/italianActive.png'),
        'japaneseActive': require('../../resources/japaneseActive.png'),
        'sushiActive': require('../../resources/sushiActive.png'),
        'thaiActive': require('../../resources/thaiActive.png'),
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

                    borderColor: 'transparent',
                    backgroundColor: isEnabled ? '#1faf2e' : 'white',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderStyle: 'solid',

                    shadowColor: isEnabled ? 'black' : 'black',
                    shadowRadius: 5,
                    shadowOpacity: 0.1,
                    elevation: 5,
                    shadowOffset: {
                        width: 10,
                        height: -10,
                    },
                }}
            >
                <Text style={{
                    paddingVertical: 3,
                    alignSelf: 'center',
                    color: isEnabled ? 'white' : '#402b1f',
                    fontSize: 16.5,
                    fontWeight: isEnabled ? '600' : '400',
                }}>
                    {props.textValue}
                </Text>

                <Image style={{
                    alignSelf: 'center',
                    maxWidth: 50,
                    maxHeight: 50,
                }}
                    // source={require(${props.image})}/>
                     source={isEnabled ? Images[props.image + 'Active'] : Images[props.image]} />
                {/* /source={Images[props.image]} /> */}


            </Pressable>
        </View>

    );
};

export default ToggleableButtonImage;
