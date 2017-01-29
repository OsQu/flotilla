// @flow

import React from 'react';

import { getConfig, setConfig } from '../../models/app_config';
import type { AppConfig } from '../../models/app_config';
import Setup from '../setup/';
import Services from './Services';

import serviceConfig from './serviceConfig';

type Props = {};

export default class ServiceList extends React.Component {
  state: {
    config: ?AppConfig
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      config: getConfig()
    };
  }

  storeConfig(config: AppConfig) {
    setConfig(config);
    this.setState({ config: config });
  }

  render() {
    if (this.state.config) {
      return <Services
        basePath={this.state.config.base_path}
        services={serviceConfig}
      />;
    } else {
      return <Setup onSetupDone={this.storeConfig.bind(this)}/>;
    }
  }
}
