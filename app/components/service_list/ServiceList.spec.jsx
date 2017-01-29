import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ServiceList from './ServiceList';
import Services from './Services';
import Setup from '../setup';

describe('<ServiceList />', () => {
  it('renders Setup component if config was not found', () => {
    ServiceList.__Rewire__('getConfig', () => null);
    const wrapper = shallow(<ServiceList />);

    expect(wrapper.containsMatchingElement(<Setup />)).to.equal(true);
    ServiceList.__ResetDependency__('getConfig');
  });

  it('renders Services component if config was found', () => {
    ServiceList.__Rewire__('getConfig', () => {
      return { base_path: '/some/path' };
    });

    const wrapper = shallow(<ServiceList />);
    expect(wrapper.containsMatchingElement(<Services />)).to.equal(true);

    ServiceList.__ResetDependency__('getConfig');
  });
});
