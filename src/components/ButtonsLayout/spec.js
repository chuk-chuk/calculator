import React from 'react';
import ButtonsLayout from './';
import Button from '../Button';

import { shallow } from 'enzyme';

describe('ButtonsLayout', () => {

  it('renders 19 <Button /> components', () => {
    const wrapper = shallow(<ButtonsLayout />);
    expect(wrapper.find(Button).length).toBe(19);
  });

  it('renders div elements', () =>{
    const wrapper = shallow(<ButtonsLayout />);
    expect(wrapper.find('div').length).toBe(6);
  });

});
