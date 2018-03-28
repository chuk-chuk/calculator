import React, { Component } from 'react'
import Button from '../Button'
import ReactDOM from 'react-dom'

import { shallow } from 'enzyme'

describe('<Button />', () => {
  let wrapper, spy

  beforeEach(() => {
    spy = jest.fn()
    wrapper = shallow(<Button clickMe={spy} value='7' />)
  })

  it('renders the button', () => {
    expect(wrapper.find('button').length).toBe(1)
  })

  it('renders a button value', () => {
    wrapper.find('button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it.only('renders a prop value of the button that passed to button comp', () => {
    expect(wrapper.find('button').text()).toBe('7')
  })
})
