import React from 'react';
import ReactDOM from 'react-dom';
import SignUpView from './SignUpView';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpView />, div);
  ReactDOM.unmountComponentAtNode(div);
});