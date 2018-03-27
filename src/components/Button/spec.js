import React, { Component } from 'react';
import Button from '../Button';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

describe('<Button />', () => {
  let wrapper, spy

  beforeEach(() => {
    spy = jest.fn()
    wrapper = shallow(<Button clickMe={spy} />)
  })

  it('renders the button', () => {
    expect(wrapper.find('button').length).toBe(1)
  })

  it('renders a button value', () => {
    wrapper.find('button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })
})
