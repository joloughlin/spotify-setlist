import React from 'react';
import { shallow } from 'enzyme';
import DevTools from '../index';

describe('DevTools', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DevTools />);
  });

  it('renders null', () => {
    expect(wrapper.html()).toBe('');
  });
});
