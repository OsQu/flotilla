import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import Setup from './components/setup';

window.onload = function() {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Setup} />
      </Route>
    </Router>, document.getElementById('app'));
};
