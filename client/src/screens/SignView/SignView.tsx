import React from 'react';
import {Text, View, Button} from 'react-native';
import InputText from '../../../src/components/InputText/InputText';
import LineBreakIcon from '../../../src/components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../../src/components/ToggleableSetting/ToggleableSetting';
import ScreenTitle from '../../../src/components/ScreenTitle/ScreenTitle';
import SectionTitle from '../../../src/components/SectionTitle/SectionTitle';
import ActionButton from '../../../src/components/ActionButton/ActionButton';

interface SignViewProps {}

const SignView: FC<SignViewProps> = () => (
    <View
      style={{
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <ScreenTitle textValue = 'Welcome'></ScreenTitle>

        <SectionTitle textValue = 'Sign In'></SectionTitle>

        <View style = {{
            justifyContent: 'center',
            alignSelf: 'stretch',
            padding: 15,
            }}>
            <InputText fieldName = 'EMAIL' textValue = "John Smith"></InputText>
            <InputText fieldName = 'PASSWORD' textValue = "John Smith"></InputText>
            <ActionButton textValue = "Sign In"></ActionButton>
        </View>

        {/* add oath? etc */}

        <View style = {{
                padding: 20,
                alignSelf: 'stretch',
                justifyContent: 'center',
            }}>
            <LineBreakIcon></LineBreakIcon>
        </View>


        <View style = {{
            flexGrow: 1,
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'stretch',
            padding: 15,
            alignItems: 'center'
            }}>
                <Text style = {{
                                fontSize: 20,
                                justifyContent: 'center',
                                color: '#402b1f',
                              }}>
                    New here? Create Account
                </Text>
        </View>
    </View>
);

export default SignView;
