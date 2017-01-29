// @flow

import React from 'react';

import { getConfig, setConfig } from '../../models/app_config';
import type { AppConfig } from '../../models/app_config';

import Setup from '../setup/';
import ServiceList from '../service_list/ServiceList';
import ServiceDetail from '../service_detail/ServiceDetail';


import serviceConfig from '../../service_config';

type Props = {};

export default class ServiceView extends React.Component {
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
      return <div className="pane-group">
        <div className="pane-sm sidebar">
          <ServiceList
            services={serviceConfig}
          />
        </div>
        <div className="pane padded-more">
          <ServiceDetail />
        </div>
      </div>;
    } else {
      return <Setup onSetupDone={this.storeConfig.bind(this)}/>;
    }
  }
}
