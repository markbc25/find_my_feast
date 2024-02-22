import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';

const ToggleableSetting = (props: textValue) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (

    <View style = {{
        paddingTop: 20,
        paddingBottom: 5,
        paddingHorizontal: 25,
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'spaceBetween',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#c1c1c1',
    }}>
      <Text
          style = {{
          flex: 1,
            fontSize: 20,
            paddingTop: 10,
            color: '#412c1f',
            justifyContent: 'flex-start',
          }}>
            {props.textValue}
      </Text>

      <Switch style = {{justifyContent: 'flex-end'}}
        trackColor={{false: '#767577', true: '#aad784'}}
        thumbColor={isEnabled ? '#5bc009' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default ToggleableSetting;
