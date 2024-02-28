import React, { FC } from 'react';
import {Text, View, PixelRatio} from 'react-native';

interface ScreenTitleProps {}
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const ScreenTitle: FC<ScreenTitleProps> = (props: textValue) => (

           <View style={{
                flex: 1,
                justifyContent: 'center',
                alignSelf: 'stretch',
//                  paddingVertical: 10,
// backgroundColor: 'red',
            }}>
              <Text
                style = {{
                    color: '#402b1f',
                    fontSize: 26,
//                     paddingLeft: 30,
                    fontWeight: '400',
                    alignSelf: 'center'
                }}>
                    {props.textValue}
              </Text>
            </View>
);

export default ScreenTitle;
