import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Footer from '../Footer';
import Application from '../Application';

import { shallow } from 'enzyme';

describe('<Application />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Application />, div);
  });

  it('renders one <Header /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('renders one <Footer /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(Footer).length).toBe(1);
  });
});
