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
            }}>
              <Text
                style = {{
                    color: '#402b1f',
                    fontSize: 30,
                    fontWeight: '600',
                    alignSelf: 'flex-start'
                }}>
                    {props.textValue}
              </Text>
            </View>
);

export default ScreenTitle;
