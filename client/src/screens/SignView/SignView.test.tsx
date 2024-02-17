import React from 'react';
import ReactDOM from 'react-dom';
import SignView from './SignView';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignView />, div);
  ReactDOM.unmountComponentAtNode(div);
});