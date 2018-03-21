import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../index';
import DevTools from '../../DevTools';
import Header from '../../Header';

describe('Layout', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      children: 'hello',
    };
    wrapper = shallow(<Layout {...props} />);
  });

  it('renders DevTools', () => {
    const element = wrapper.find(DevTools);

    expect(element).toExist();
  });

  it('renders children', () => {
    expect(wrapper).toIncludeText(props.children);
  });

  it('renders Header', () => {
    const element = wrapper.find(Header);

    expect(element).toExist();
  });
});
