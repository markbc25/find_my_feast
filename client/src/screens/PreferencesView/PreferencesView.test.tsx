import React from 'react';
import ReactDOM from 'react-dom';
import PreferencesView from './PreferencesView';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PreferencesView />, div);
  ReactDOM.unmountComponentAtNode(div);
});