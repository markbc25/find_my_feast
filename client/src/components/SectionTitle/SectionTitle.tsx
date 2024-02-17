import React, { FC } from 'react';
import {Text, View} from 'react-native';

interface SectionTitleProps {}

const SectionTitle: FC<SectionTitleProps> = (props: textValue) => (
 <View style = {{
            alignSelf: 'flex-start', paddingLeft: 30,}}>
              <Text
                  style = {{
                      color: '#402b1f',
                      fontSize: 22,
                      fontWeight: 'bold',
                  }}>
                      {props.textValue}
                </Text>
        </View>
);

export default SectionTitle;
