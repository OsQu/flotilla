import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ServiceView from './ServiceView';
import ServiceList from '../service_list/ServiceList';
import Setup from '../setup';

describe('<ServiceView />', () => {
  it('renders Setup component if config was not found', () => {
    ServiceView.__Rewire__('getConfig', () => null);
    const wrapper = shallow(<ServiceView />);

    expect(wrapper.containsMatchingElement(<Setup />)).to.equal(true);
    ServiceView.__ResetDependency__('getConfig');
  });

  it('renders ServiceList component if config was found', () => {
    ServiceView.__Rewire__('getConfig', () => {
      return { base_path: '/some/path' };
    });

    const wrapper = shallow(<ServiceView />);
    expect(wrapper.containsMatchingElement(<ServiceList />)).to.equal(true);

    ServiceView.__ResetDependency__('getConfig');
  });
});
