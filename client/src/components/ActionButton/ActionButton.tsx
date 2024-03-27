import React, { FC } from 'react';
import {Text, View, Pressable, TextInput} from 'react-native';

interface ActionButtonProps {
    onPress: Function,
    textValue: string,
}

const ActionButton: FC<ActionButtonProps> = (props: ActionButtonProps) => (
    <View>
        <Pressable  style={({pressed}) => [
                            {
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                paddingVertical: 12,
                                paddingHorizontal: 32,
                                borderRadius: 4,
                                elevation: 3,
                                backgroundColor: pressed ?  '#0f9100' : '#509e11',
                             }
                           ]}

                 onPress={props.onPress}>

                      <Text style = {{color: 'white',
                      fontSize: 20}}>{props.textValue}</Text>



    </Pressable>

    </View>
);



export default ActionButton;
