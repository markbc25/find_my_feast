import React, { FC } from 'react';
import { Text, View, PixelRatio, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
EStyleSheet.build({ $rem: window_width / 380 });


interface SectionTitleProps {
    textValue: string,
}

const SectionTitle: FC<SectionTitleProps> = (props: SectionTitleProps) => (
    <View style={{
        alignSelf: 'flex-start'
    }}>
        <Text
            style={{
                color: '#402b1f',
                fontSize: 0.055 * window_width,
                fontWeight: '500',
            }}>
            {props.textValue}
        </Text>
    </View>
);

export default SectionTitle;
