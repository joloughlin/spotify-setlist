import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../index';
import shallowWithRouter from 'utils/test/shallowWithRouter';

describe('NavLink', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      children: 'Home',
      to: '/home',
    };
    wrapper = shallowWithRouter(<NavLink {...props} />);
  });

  it('renders Link', () => {
    const element = wrapper.find(Link);

    expect(element).toBePresent();

    const { children, to } = element.props();

    expect(children).toBe(props.children);
    expect(to).toBe(props.to);
  });
});
