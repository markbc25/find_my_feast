import React, { useState, useEffect } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

interface ToggleableSettingProps {
  textValue: string,
  onToggle: Function,
  // initialValue: boolean,
}

const ToggleableSetting = (props: ToggleableSettingProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  }

  useEffect(() => {
    props.onToggle(isEnabled);
  }, [isEnabled]);



  return (

    <View style = {{
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 10,
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'spaceBetween',
        flex: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#c1c1c1',
    }}>
      <Text
        style={{
          flex: 1,
          fontSize: 18,
          paddingTop: 10,
          color: '#412c1f',
          justifyContent: 'flex-start',
        }}>
        {props.textValue}
      </Text>

      <Switch style={{ justifyContent: 'flex-end' }}
        trackColor={{ false: '#767577', true: '#aad784' }}
        thumbColor={isEnabled ? '#5bc009' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default ToggleableSetting;
