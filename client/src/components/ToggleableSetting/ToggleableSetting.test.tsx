import React from 'react';
import ReactDOM from 'react-dom';
import ToggleableSetting from './ToggleableSetting';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToggleableSetting />, div);
  ReactDOM.unmountComponentAtNode(div);
});