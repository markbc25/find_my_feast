import React from 'react';
import ReactDOM from 'react-dom';
import SessionStorageService from './SessionStorage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SessionStorageService />, div);
  ReactDOM.unmountComponentAtNode(div);
});