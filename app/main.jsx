import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import ServiceList from './components/service_list/ServiceList';

window.onload = function() {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ServiceList} />
      </Route>
    </Router>, document.getElementById('app'));
};
