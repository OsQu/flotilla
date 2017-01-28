import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Setup from './Setup';

describe('<Setup />', () => {
  describe('rendering', () => {
    it('renders getting started text', () => {
      const wrapper = shallow(<Setup />);
      expect(wrapper.text()).to.contain("We are doing this Oskari!");
    });
  });
});
