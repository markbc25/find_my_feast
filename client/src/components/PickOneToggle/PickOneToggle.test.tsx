import React from 'react';
import ReactDOM from 'react-dom';
import PickOneToggle from './PickOneToggle';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PickOneToggle />, div);
  ReactDOM.unmountComponentAtNode(div);
});