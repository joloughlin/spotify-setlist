import React from 'react';
import { shallow } from 'enzyme';
import Root from '../index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

describe('Root', () => {
  let props, wrapper;

  beforeEach(() => {
    const store = {
      dispatch: () => {},
      getState: () => {},
      subscribe: () => {},
    };
    props = {
      store,
    };
    wrapper = shallow(<Root {...props} />);
  });

  it('renders Provider', () => {
    const element = wrapper.find(Provider);

    expect(element).toBePresent();

    const { store } = element.props();
    expect(store).toBe(props.store);
  });

  it('renders BrowserRouter', () => {
    const element = wrapper.find(BrowserRouter);

    expect(element).toBePresent();
  });

  it('renders App', () => {
    const element = wrapper.find(App);

    expect(element).toBePresent();
  });
});
