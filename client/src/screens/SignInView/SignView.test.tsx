import React from 'react';
import ReactDOM from 'react-dom';
import SignView from './SignInView';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignView />, div);
  ReactDOM.unmountComponentAtNode(div);
});