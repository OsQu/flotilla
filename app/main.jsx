import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import ServiceView from './components/service_view/ServiceView';

window.onload = function() {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ServiceView} />
      </Route>
    </Router>, document.getElementById('app'));
};
