import React from 'react';
import Footer from '../Footer';

import { shallow } from 'enzyme';

describe('<Footer />', () => {
  it('renders the footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').length).toBe(1);
  });

  it('renders component with a h3', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('h4').length).toBe(1);
  });

  it('renders the footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').length).toBe(1);
  });
});
