import Header from '../Header'
import Footer from '../Footer'
import Application from '../Application'

import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

describe('<Application />', () => {
  const initialState = { clickedButton: '', resultBox: ''}
  const mockStore = configureStore()
  let wrapper, store

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(<Provider store={store}><Application/></Provider>)
  })

  it('prop clickedButton matches with initialState', () => {
      expect(wrapper.find(Application).prop('clickedButton')).toEqual(initialState.input)
   })

  it('prop resultBox matches with initialState', () => {
      expect(wrapper.find(Application).prop('resultBox')).toEqual(initialState.result)
   })

  it('renders one <Header /> component', () => {
    expect(wrapper.find(Application).length).toBe(1)
  })

  it('renders one <Footer /> component', () => {
    expect(wrapper.find(Footer).length).toBe(1)
  })

  it('renders one <Footer /> component', () => {
    expect(wrapper.find(Header).length).toBe(1)
  })
})
