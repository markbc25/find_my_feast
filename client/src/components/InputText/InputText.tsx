import React, { FC } from 'react';
import { useState, useEffect } from "react";
import { Text, View, TextInput } from 'react-native';


interface InputTextProps {
    defaultValue: string,
    fieldName: string,
    change: Function
}

const InputText: FC<InputTextProps> = (props: InputTextProps) => {
    const [value, setNewValue] = useState(props.defaultValue);

    function handleChange(event) {
        let value = event.target.value;
        setNewValue(value);
        props.change(value);
    }


    return (<View style = {{paddingVertical: 5}}>
        <View style={{
            alignItems: 'flex-start',
            borderColor: '#c1c1c1',
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 4,
            padding: 5,
            paddingLeft: 30,
        }}>
            <TextInput
                style={{
                    color: '#402b1f',
                    fontSize: 18,
                    justifyContent: 'flex-start',

                }}

                onChangeText={newText => props.change(newText)}>
                {value}
            </TextInput>

            <Text
                style={{
                    position: 'absolute',
                    top: -15,
                    left: 10,
                    fontSize: 16,
                    backgroundColor: '#f6f3f3',
                    color: '#35ad41',
                    paddingLeft: 10,
                    paddingRight: 10,
                    justifyContent: 'flex-start',
                }}>
                {props.fieldName}
            </Text>
        </View>
    </View>

    );
}

export default InputText;
