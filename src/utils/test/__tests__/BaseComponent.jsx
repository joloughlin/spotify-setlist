import React from 'react';
import { shallow } from 'enzyme';
import { BaseComponent } from '../BaseComponent';

describe('BaseComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BaseComponent />);
  });

  it('renders', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
