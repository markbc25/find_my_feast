import React from 'react';
import ReactDOM from 'react-dom';
import InputText from './InputText';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputText/>, div);
  ReactDOM.unmountComponentAtNode(div);
});