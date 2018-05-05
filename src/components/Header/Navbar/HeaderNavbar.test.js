import React from 'react';
import ReactDOM from 'react-dom';
import HeaderNavbar from './HeaderNavbar';

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderNavbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
