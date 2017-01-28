/* @flow */

import React from 'react';

export default class Setup extends React.Component {
  render() {
    const foo: string = "Oskari";
    return <div className="padded-more">
      <span>We are doing this {foo}!</span>
    </div>;
  }
}
