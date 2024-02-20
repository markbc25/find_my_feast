import React, { FC, useState} from 'react';
import {Switch, View} from 'react-native';

interface ToggleProps {}

//  const [isEnabled, setIsEnabled] = useState(false);
//  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


const ToggleButton: FC<ToggleProps> = () => (

    <View>
        <Switch
                trackColor={{false: '#767577', true: '#aad984'}}
                thumbColor={isEnabled ? '#5bc009' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
//                 onValueChange={toggleSwitch}
//                 value={isEnabled}
         ></Switch>
    </View>
    );

export default ToggleButton;
