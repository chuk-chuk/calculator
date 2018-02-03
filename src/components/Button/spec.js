import React from 'react';
import Button from '../Button';

import { shallow } from 'enzyme';

xdescribe('<Button />', () => {
  it('renders the button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.contains(<button></button>)).toBe(true);
  });
});
