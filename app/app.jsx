/* @flow */

import React from 'react';

export default class App extends React.Component {
  render() {
    return <div className="window">
      <div className="window-content">
        {this.props.children}
      </div>
    </div>;
  }
}
