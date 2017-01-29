/* @flow */

import React from 'react';

type Props = {
  children: Array<ReactClass<*>>
};

export default class App extends React.Component {
  props: Props

  render() {
    return <div className="window">
      <div className="window-content">
        {this.props.children}
      </div>
    </div>;
  }
}
