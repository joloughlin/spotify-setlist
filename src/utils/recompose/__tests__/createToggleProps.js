import React, { Component } from 'react';
import { shallow } from 'enzyme';
import createToggleProps from '../createToggleProps';
import BaseComponent from '../..//test/BaseComponent';

describe('createToggleProps', () => {
  let EnhancedBaseComponent,
    EnhancedBaseComponentInitiallyTrue,
    props,
    wrapper,
    wrapperInitialllyTrue;

  const stateName = 'isModalOpen',
    toggleName = 'toggleModal',
    toggleOffName = 'modalClose',
    toggleOnName = 'modalOpen';

  beforeAll(() => {
    const toggleConfiguration = {
      stateName,
      toggleName,
      toggleOffName,
      toggleOnName,
    };

    const withToggleProps = createToggleProps(toggleConfiguration);

    EnhancedBaseComponent = withToggleProps(BaseComponent);

    const withTogglePropsInitiallyTrue = createToggleProps({
      ...toggleConfiguration,
      initialState: true,
    });

    EnhancedBaseComponentInitiallyTrue = withTogglePropsInitiallyTrue(
      BaseComponent,
    );
  });

  describe('wrapper state initially false', () => {
    beforeEach(() => {
      wrapper = shallow(<EnhancedBaseComponent />);
    });

    it('passes down the expected initial state', () => {
      const state = wrapper.props()[stateName];
      expect(state).toBe(false);
    });

    it('passes down a toggle handler', () => {
      const handler = wrapper.props()[toggleName];

      handler();

      const state = wrapper.props()[stateName];

      expect(state).toBe(true);
    });

    it('passes down a set to false handler', () => {
      const handler = wrapper.props()[toggleOffName];

      handler();

      const state = wrapper.props()[stateName];

      expect(state).toBe(false);
    });

    it('passes down a set to true handler', () => {
      const handler = wrapper.props()[toggleOnName];

      handler();

      const state = wrapper.props()[stateName];

      expect(state).toBe(true);
    });
  });

  describe('wrapper state initially true', () => {
    beforeEach(() => {
      wrapper = shallow(<EnhancedBaseComponentInitiallyTrue />);
    });

    it('passes down the expected initial state', () => {
      const state = wrapper.props()[stateName];
      expect(state).toBe(true);
    });

    it('passes down a toggle handler', () => {
      const handler = wrapper.props()[toggleName];

      handler();

      const state = wrapper.props()[stateName];

      expect(state).toBe(false);
    });

    it('passes down a set to false handler', () => {
      const handler = wrapper.props()[toggleOffName];

      handler();

      const state = wrapper.props()[stateName];

      expect(state).toBe(false);
    });

    it('passes down a set to true handler', () => {
      const handler = wrapper.props()[toggleOnName];

      handler();

      const state = wrapper.props()[stateName];

      expect(state).toBe(true);
    });
  });
});
