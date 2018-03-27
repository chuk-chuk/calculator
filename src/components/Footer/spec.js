import React from 'react';
import Footer from '../Footer';

import { shallow } from 'enzyme';

describe('<Footer />', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  })

  it('renders the footer', () => {
    expect(wrapper.find('p').length).toBe(1);
  });

  it('renders component with a h3', () => {
    expect(wrapper.find('h4').length).toBe(1);
  });

  it('renders the footer', () => {
    expect(wrapper.find('footer').length).toBe(1);
  });
});
