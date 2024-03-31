import React, { FC, useState } from 'react';
import {View, Text} from 'react-native';
import { SignInOrUpViewWrapper } from './SignInOrUpView.styled';
import SignInView from '../../screens/SignInView/SignInView';
import SignUpView from '../../screens/SignUpView/SignUpView';

interface SignInOrUpViewProps { }

const SignInOrUpView: FC<SignInOrUpViewProps> = () => {
   const [hasAccount, setHasAccount] = useState(true);
   return (
      <View style = {{flex: 1}}>
         {(hasAccount) && <SignInView onCreateAccountPressed = {setHasAccount}/>}
         {(!hasAccount) && <SignUpView onLogInButtonPressed = {setHasAccount}/>}
      </View>
   );
}

export default SignInOrUpView;
