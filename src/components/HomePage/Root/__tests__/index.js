import React from 'react';
import { shallow } from 'enzyme';
import HomePage, { text } from '../index';

describe('HomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it('renders header text', () => {
    expect(wrapper).toIncludeText(text.header);
  });
});
