import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';

import Setup from './components/setup';

window.onload = function() {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={Setup} />
    </Router>, document.getElementById('app'));
};
