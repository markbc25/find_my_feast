import React from 'react';
import ReactDOM from 'react-dom';
import SignInOrUpView from './SignInOrUpView';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignInOrUpView />, div);
  ReactDOM.unmountComponentAtNode(div);
});