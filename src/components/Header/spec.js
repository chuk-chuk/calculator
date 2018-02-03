import React from 'react';
import Header from '../Header';

import { shallow } from 'enzyme';

describe('<Header />', () => {
  it('renders component with a h3', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h3').length).toBe(1);
  });
});
