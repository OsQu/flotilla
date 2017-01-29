/* @flow */

import React from 'react';
import type { AppConfig } from '../../models/app_config';

type Props = {
  onSetupDone: (config: AppConfig) => void
}

export default class Setup extends React.Component {
  props: Props

  onNext(e: Event) {
    e.preventDefault();
    this.props.onSetupDone({ base_path: this.refs.base_path.value });
  }

  render() {
    const name: string = "Oskari";

    return (
      <div className="padded-more">
        <h1>Hello there {name}!</h1>
        <p>Welcome to foobar blablaba intro text</p>

        <p>Let's setup your system! Input the path to the base folder of your system</p>
        <form>
          <div className="form-group">
            <input ref='base_path' type="text" className="form-control" placeholder="Base path" />
          </div>
          <button id='next-button' onClick={this.onNext.bind(this)} className="btn btn-large btn-default">Next</button>
        </form>
      </div>
    );
  }
}
