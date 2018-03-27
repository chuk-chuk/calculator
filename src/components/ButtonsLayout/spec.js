import React from 'react'
import ButtonsLayout from './'
import Button from '../Button'
import { addNumberToStore, actionPressButton } from '../../action'

import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

describe('<ButtonsLayout />', () => {
  const mockStore = configureStore()
  let wrapper, store, action

  beforeEach(() => {
    store = mockStore()
    wrapper = mount(<Provider store={store}><ButtonsLayout/></Provider>);
  })

  it('renders 19 <Button /> components', () => {
    expect(wrapper.find(Button).length).toBe(19)
  })

  it('renders div elements', () => {
    expect(wrapper.find('div').length).toBe(6)
  })

  it('check addNumberToStore action on dispatching', () => {
    store.dispatch(addNumberToStore('5'))
    action = store.getActions() //returns an array
    expect(action[0].type).toBe('ADD_NUMBER_TO_STORE')
  })

  it('check actionPressButton action on dispatching', () => {
    store.dispatch(actionPressButton('='))
    store.dispatch(actionPressButton('c'))
    action = store.getActions()
    expect(action[0].type).toBe('RESULT')
    expect(action[1].type).toBe('RESET')
  })
})
