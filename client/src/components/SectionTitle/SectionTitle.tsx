import React, { FC } from 'react';
import {Text, View, PixelRatio} from 'react-native';

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;


interface SectionTitleProps {}

const SectionTitle: FC<SectionTitleProps> = (props: textValue) => (
 <View style = {{
            alignSelf: 'flex-start', paddingLeft: 30}}>
              <Text
                  style = {{
                      color: '#402b1f',
                      fontSize: getFontSize(22),
                      fontWeight: 'bold',
                    //  backgroundColor: 'red',
                  }}>
                      {props.textValue}
                </Text>
        </View>
);

export default SectionTitle;
