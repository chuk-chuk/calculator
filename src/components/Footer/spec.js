import React from 'react';
import Footer from '../Footer';

import { shallow } from 'enzyme';

describe('<Footer />', () => {
  xit('renders the footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.contains([<footer></footer>])).toBe(true);
  });

  it('renders component with a h3', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('h4').length).toBe(1);
  });
});
