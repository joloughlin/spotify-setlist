import React from 'react';
import { shallow } from 'enzyme';
import addProps from '../addProps';
import BaseComponent from '../../test/BaseComponent';

describe('addProps', () => {
  const a = 'a';
  const b = 'b';

  it('injects the a prop into the BaseComponent', () => {
    const enhance = addProps({ a: () => a });
    const Component = enhance(BaseComponent);
    const wrapper = shallow(<Component />);

    expect(wrapper.props()).toEqual({ a });
  });

  it('allows props to be passed through', () => {
    const enhance = addProps({ a: () => a });
    const Component = enhance(BaseComponent);
    const wrapper = shallow(<Component b={b} />);

    expect(wrapper.props()).toEqual({ a, b });
  });

  it('allows props to be created from passed props', () => {
    const enhance = addProps({ a: () => b.toUpperCase() });
    const Component = enhance(BaseComponent);
    const wrapper = shallow(<Component b={b} />);

    expect(wrapper.props()).toEqual({ a: b.toUpperCase(), b });
  });
});
