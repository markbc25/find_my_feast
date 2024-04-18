import React from 'react';
import ReactDOM from 'react-dom';
import CurrentLiked from './CurrentLiked';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrentLiked />, div);
  ReactDOM.unmountComponentAtNode(div);
});