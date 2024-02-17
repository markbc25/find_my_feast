import React, { FC } from 'react';
import {Text, View} from 'react-native';

interface ScreenTitleProps {}

const ScreenTitle: FC<ScreenTitleProps> = (props: textValue) => (
           <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignSelf: 'stretch',
                paddingTop: 30,
                paddingBottom: 30,
            }}>
              <Text
                style = {{
                    color: '#402b1f',
                    fontSize: 35,
                    paddingLeft: 30,
                    fontWeight: 'bold',
                }}>
                    {props.textValue}
              </Text>
            </View>
);

export default ScreenTitle;
