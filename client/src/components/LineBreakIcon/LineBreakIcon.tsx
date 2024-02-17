import React, { FC } from 'react';
import {Text, View, Button, Image} from 'react-native';

interface LineBreakIconProps {}

const LineBreakIcon: FC<LineBreakIconProps> = () => (
 <View style = {{
    alignItems: 'center',
 }}>
    <Image
        source={require('../../resources/linebreakicon.png')}
        style = {{
            justifyContent: 'center',
            width: 50,
            height: 20,
            padding: 30,
        }}
    />
 </View>
);

export default LineBreakIcon;
