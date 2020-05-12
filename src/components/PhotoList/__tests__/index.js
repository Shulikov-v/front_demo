import React from 'react';
import { shallow } from 'enzyme';
import PhotoList from '../';

it('renders welcome message', () => {
    const wrapper = shallow((<PhotoList>
        <h2>Welcome to React</h2>
    </PhotoList>));
    const welcome = <h2>Welcome to React</h2>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });