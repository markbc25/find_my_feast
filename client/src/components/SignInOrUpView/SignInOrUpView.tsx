import React, { FC, useState } from 'react';
import {View, Text} from 'react-native';
import { SignInOrUpViewWrapper } from './SignInOrUpView.styled';
import SignInView from '../../screens/SignInView/SignInView';
import SignUpView from '../../screens/SignUpView/SignUpView';

interface SignInOrUpViewProps {
   updateIsSignedIn: Function,
 }

const SignInOrUpView: FC<SignInOrUpViewProps> = (props: SignInOrUpViewProps) => {
   const [hasAccount, setHasAccount] = useState(true);
   return (
      <View style = {{flex: 1}}>
         {(hasAccount) && <SignInView onCreateAccountPressed = {setHasAccount} updateIsSignedIn = {props.updateIsSignedIn}/>}
         {(!hasAccount) && <SignUpView onLogInButtonPressed = {setHasAccount}/>}
      </View>
   );
}

export default SignInOrUpView;
