import React from 'react';
import { Link } from 'react-router-dom';
import Header, { text } from '../index';
import NavLinks from '../../NavLinks';
import shallowWithRouter from 'utils/test/shallowWithRouter';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithRouter(<Header />);
  });

  it('renders NavLinks', () => {
    const element = wrapper.find(NavLinks);

    expect(element).toExist();
  });

  it('renders Link', () => {
    const element = wrapper.find(Link);

    expect(element).toExist();
    expect(element.children()).toIncludeText(text.brandLink);
  });
});
