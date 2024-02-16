import React, { FC } from 'react';
import {Text, View, Button} from 'react-native';

interface TextInputProps {}

const TextInput: FC<TextInputProps> = (props: fieldName, textValue) => (
<View style = {{padding: 10,}}>
 <View style = {{
    alignItems: 'flex-start',
    borderColor: '#c1c1c1',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 2,
    padding: 15,
    paddingLeft: 30,
 }}>
    <Text
        style  = {{
            color: '#402b1f',
            flex: 1,
            fontSize: 24,
            justifyContent: 'flex-start',
        }}>
        {props.textValue}
    </Text>

    <Text
        style  = {{
            position: 'absolute',
            top: -15,
            left: 10,
            fontSize: 18,
            backgroundColor: 'white',
            color: '#5bc009',
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'flex-start',
        }}>
            {props.fieldName}
        </Text>
    </View>
 </View>

);

export default TextInput;
