// @flow

import React from 'react';

import type { ServiceConfig } from '../../service_config';

type Props = {
  services: Array<ServiceConfig>
}

export default class ServiceList extends React.Component {
  props: Props

  render() {
    return <ul className="list-group">
      {this.props.services.map((service) =>
        <li className="list-group-item">
          <p>{service.name}</p>
        </li>
      )}
    </ul>;
  }
}
