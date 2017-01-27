import React from 'react';
import ReactDOM from 'react-dom';
import Setup from './components/setup/index.jsx';

window.onload = function() {
  ReactDOM.render(<Setup />, document.getElementById('app'))
};
