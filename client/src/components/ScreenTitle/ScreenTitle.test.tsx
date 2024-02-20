import React from 'react';
import ReactDOM from 'react-dom';
import ScreenTitle from './ScreenTitle';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScreenTitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});