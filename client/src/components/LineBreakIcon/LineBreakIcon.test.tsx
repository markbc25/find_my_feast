import React from 'react';
import ReactDOM from 'react-dom';
import LineBreakIcon from './LineBreakIcon';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LineBreakIcon />, div);
  ReactDOM.unmountComponentAtNode(div);
});