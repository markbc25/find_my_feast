import React from 'react';
import { useState, useEffect } from "react";
import { Text, View, Button, Pressable, Image } from 'react-native';
import InputText from '../../components/InputText/InputText';
import LineBreakIcon from '../../components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../components/ToggleableSetting/ToggleableSetting';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ActionButton from '../../components/ActionButton/ActionButton';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import sessionStorageInstance from '../../storage/SessionStorage/SessionStorage';
import preferencesAndRestaurantsInstance from '../../storage/SessionStorage/PreferencesAndRestaurants';


interface SignInViewProps {
    onCreateAccountPressed: Function,
    updateIsSignedIn: Function,
}

const SignInView: FC<SignInViewProps> = (props: SignInViewProps) => {
    let [email, setEmail] = useState("Initial");
    let [password, setPassword] = useState("Initial");

    function onButtonPressed() {
        props.onCreateAccountPressed(false);
    }

    function emailChange(newValue: string) {
        setEmail(newValue);
        
       
    }

    function passwordChange(newValue: string) {
        setPassword(newValue);
        // console.log("new password: " + password);
    }

    function handleSignIn() {
        const body = {
            email: email,
            password: password,
        }

        axios.post("http://10.0.2.2:3000/api/auth/login", body)
            .then(res => {
                console.log(res.data);
                props.updateIsSignedIn(true);
            })
            .catch(error => {
                console.log("Error: " + error.response.data);
            });


    }

    useEffect(() => {
        sessionStorageInstance.setEmail(email);
    }, [email])

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f6f3f3',
            }}>

            <View style={{ flex: 0.5, alignSelf: 'stretch', paddingHorizontal: 30, }}>
                <ScreenTitle textValue='Welcome'></ScreenTitle>
            </View>

            <View style={{ flex: 1.75, justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 30, gap: 10, }}>
                <View style={{ paddingBottom: 40 }}>
                    <SectionTitle textValue='Sign In'></SectionTitle>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignSelf: 'stretch',
                    padding: 10,
                    flex: 1,
                    flexDirection: 'column',
                    gap: 30,
                }}>
                    <InputText fieldName='EMAIL' defaultValue="example@email.com" change={emailChange}></InputText>
                    <InputText fieldName='PASSWORD' defaultValue='******' change={passwordChange}></InputText>
                </View>

                <View style={{ paddingTop: 30 }}>
                    <ActionButton textValue="Sign In" onPress={handleSignIn}></ActionButton>
                </View>


                <View style={{ paddingTop: 20 }}>
                    <Pressable style={({ pressed }) => [
                        {
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            paddingVertical: 12,
                            paddingHorizontal: 32,
                            borderRadius: 4,
                            elevation: 3,
                            backgroundColor: pressed ? '#fff' : '#fff',
                        }
                    ]}

                        onPress={() => console.log("continuing with google")}>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Image
                                style={{ width: 20, height: 20, alignSelf: 'center' }}
                                source={require('../../resources/googleLogo.png')}
                            />

                            <Text style={{
                                color: 'black',
                                fontSize: 20,
                                paddingHorizontal: 20,
                                justifyContent: 'flex-start',
                            }}>Continue with Google</Text>
                        </View>
                    </Pressable>
                </View>
            </View>


            <View style={{
                padding: 20,
                alignSelf: 'stretch',
                justifyContent: 'center',
            }}>
                <LineBreakIcon></LineBreakIcon>
            </View>


            <View style={{
                flexGrow: 1,
                flex: 0.5,
                justifyContent: 'center',
                gap: 5,
                alignSelf: 'stretch',
                padding: 15,
                alignItems: 'center',
                flexDirection: 'row',

            }}>
                <Text style={{
                    fontSize: 20,
                    justifyContent: 'center',
                    color: '#402b1f',
                }}>
                    New here?

                </Text>
                <Pressable
                    onPress={onButtonPressed}
                >
                    <Text style={{
                        textDecorationLine: 'underline',
                        fontSize: 20,
                        justifyContent: 'center',
                        color: '#402b1f',
                    }}>
                        Create Account
                    </Text>
                </Pressable>

            </View>
        </View>
    );
}

export default SignInView;
