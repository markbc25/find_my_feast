import React from 'react';
import ReactDOM from 'react-dom';
import CustomSliderLabel from './CustomSliderLabel';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomSliderLabel />, div);
  ReactDOM.unmountComponentAtNode(div);
});