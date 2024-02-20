import React from 'react';
import ReactDOM from 'react-dom';
import TwoSidedSlider from './TwoSidedSlider';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TwoSidedSlider />, div);
  ReactDOM.unmountComponentAtNode(div);
});