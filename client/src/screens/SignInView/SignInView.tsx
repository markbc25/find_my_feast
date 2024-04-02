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
import { GoogleSigninButton, GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import axios from 'axios';

GoogleSignin.configure({
  webClientId: '728634266042-ql27siv0p7ke5sd1vcsjpseqt65e2i2p.apps.googleusercontent.com',
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  offlineAccess: true, // If needed
});

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
        // console.log("new email: " + email);
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
    
    // const googleSignIn = async () => {
    //   try {
    //     await GoogleSignin.hasPlayServices();
    //     const userInfo = await GoogleSignin.signIn();
    //     handleGoogleSignIn();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // const handleGoogleSignIn = async () => {
    //   try {
    //     const userInfo = await GoogleSignin.signIn();
    //     const token = userInfo.idToken;
    
    //     axios.post("http://10.0.2.2:3000/api/auth/login", {
    //       token: token,
    //       //FIX POST REQUEST
    //     })
    //     .then(res => {
    //       console.log(res.data);
    //       props.updateIsSignedIn(true);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    _signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        setState({ userInfo, error: undefined });
      } catch (error) {
        if (isErrorWithCode(error)) {
          switch (error.code) {
            case statusCodes.SIGN_IN_CANCELLED:
              // user cancelled the login flow
              break;
            case statusCodes.IN_PROGRESS:
              // operation (eg. sign in) already in progress
              break;
            case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
              // play services not available or outdated
              break;
            default:
            // some other error happened
          }
        } else {
          // an error that's not related to google sign in occurred
        }
      }
    };
    

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

                        onPress={GoogleSignin}>

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
