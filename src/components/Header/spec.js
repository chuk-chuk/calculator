import React from 'react';
import Header from '../Header';

import { shallow } from 'enzyme';

describe('<Header />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('renders component with a h3', () => {

    expect(wrapper.find('h3').length).toBe(1);
  })

  it('renders one logo image', () => {
    expect(wrapper.find('img').length).toBe(1)
  })

  it('renders one header element', () => {
    expect(wrapper.find('header').length).toBe(1)
  })
})
