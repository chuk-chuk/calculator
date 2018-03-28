import InputField from '../InputField'
import Calculator from '../Calculator'

import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

describe('<Calculator />', () => {
  const initialState = { clickedButton: '', resultBox: ''}
  const mockStore = configureStore()
  let wrapper, store

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(<Provider store={store}><Calculator/></Provider>)
  })

  it('prop clickedButton matches with initialState', () => {
      expect(wrapper.find(Calculator).prop('clickedButton')).toEqual(initialState.input)
   })

  it('prop resultBox matches with initialState', () => {
      expect(wrapper.find(Calculator).prop('resultBox')).toEqual(initialState.result)
   })

  it('renders <Calculator /> component', () => {
    expect(wrapper.find(Calculator).length).toBe(1)
  })

  it('renders two <InputField /> components', () =>{
    expect(wrapper.find(InputField).length).toBe(2)
  })
})
