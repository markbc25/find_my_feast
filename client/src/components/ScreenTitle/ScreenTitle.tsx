import React, { FC } from 'react';
import {Text, View, PixelRatio, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
EStyleSheet.build({$rem: window_width / 380});

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
                    fontSize: 0.08 * window_width,
                    fontWeight: '600',
                    alignSelf: 'flex-start'
                }}>
                    {props.textValue}
              </Text>
            </View>
);

export default ScreenTitle;
