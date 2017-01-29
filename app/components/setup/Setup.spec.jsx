import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Setup from './Setup';

describe('<Setup />', () => {
  describe('clicking "next" button', () => {
    it('fires onSetupDone callback with correct config', () => {
      const onSetupDone = sinon.spy();
      const wrapper = mount(<Setup onSetupDone={onSetupDone} />);
      wrapper.ref('base_path').node.value = '/base/path/';
      wrapper.find('#next-button').simulate('click', { preventDefault() {} });

      expect(onSetupDone.callCount).to.eql(1);
      expect(onSetupDone.firstCall.args).to.eql([{base_path: '/base/path/'}]);
    });
  });
});
