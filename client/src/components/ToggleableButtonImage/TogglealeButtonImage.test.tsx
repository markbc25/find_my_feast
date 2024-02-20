import React from 'react';
import ReactDOM from 'react-dom';
import TogglealeButtonImage from './TogglealeButtonImage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TogglealeButtonImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});