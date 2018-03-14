import React from 'react';
import Button from '../Button';

import { shallow } from 'enzyme';

describe('<Button />', () => {
    let wrapper;

    beforeEach(() => {
        const onClick = jest.fn();
        wrapper = shallow(<Button onClick={onClick} />);
    });

    it('renders the button', () => {

        expect(wrapper.find('button').length).toBe(1);

    });

    it('renders a button value', () => {

        const onClick = jest.fn();
        wrapper = shallow(<Button onClick={onClick} />);

        wrapper.prop('onClick')();

        expect(wrapper.prop('onClick')).toBeCalled();

    });

});
