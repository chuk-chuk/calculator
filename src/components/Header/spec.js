import React from 'react';
import Header from '../Header';

import { shallow } from 'enzyme';

describe('<Header />', () => {
  it('renders component with a h3', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h3').length).toBe(1);
  });

  it('renders one logo image', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1)
  });

  it('renders one header element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header').length).toBe(1)
  });


});
