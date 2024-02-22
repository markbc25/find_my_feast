import React, { FC } from 'react';
import {Text, View, TextInput} from 'react-native';

interface InputTextProps {}

const InputText: FC<InputTextProps> = (props: fieldName, textValue) => (
<View style = {{padding: 10}}>
 <View style = {{
    alignItems: 'flex-start',
    borderColor: '#c1c1c1',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 2,
    padding: 5,
    paddingLeft: 30,
 }}>
    <TextInput
        style  = {{
            color: '#402b1f',
            fontSize: 22,
            justifyContent: 'flex-start',
//             paddingVertical: 40,
        }}>
        {props.textValue}
    </TextInput>

    <Text
        style  = {{
            position: 'absolute',
            top: -15,
            left: 10,
            fontSize: 16,
            backgroundColor: '#f6f3f3',
            color: '#0f9100',
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'flex-start',
        }}>
            {props.fieldName}
        </Text>
    </View>
 </View>

);

export default InputText;
