import React from 'react';
import InputField from './';

import { shallow } from 'enzyme';

describe('InputField', () => {

  it('renders InputField component', () => {
    const wrapper = shallow(<InputField/>);
    expect(wrapper.find('div').length).toBe(1);
  });

});
