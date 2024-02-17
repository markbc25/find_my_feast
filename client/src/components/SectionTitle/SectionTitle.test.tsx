import React from 'react';
import ReactDOM from 'react-dom';
import SectionTitle from './SectionTitle';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SectionTitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});