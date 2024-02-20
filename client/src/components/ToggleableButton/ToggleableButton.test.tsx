import React from 'react';
import ReactDOM from 'react-dom';
import ToggleableButton from './ToggleableButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToggleableButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});