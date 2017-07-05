import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import App from '../index';
import HomePage from '../../HomePage/Root';
import LogIn from '../../LogIn/Root';
import Profile from '../../Profile/Root';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders Route components', () => {
    const routeComponents = [HomePage, LogIn, Profile];

    const elements = wrapper.find(Route);

    routeComponents.forEach(routeComponent => {
      const element = elements.filterWhere(n => {
        const { component } = n.props();
        return component === routeComponent;
      });

      expect(element).toBePresent();
    });
  });
});
