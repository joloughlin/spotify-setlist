import React from 'react';
import { shallow } from 'enzyme';
import ToJSON from '../ToJSON';

describe('ToJSON', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      id: '1',
    };
    wrapper = shallow(<ToJSON {...props} />);
  });

  it('renders props as text', () => {
    expect(wrapper).toIncludeText('{ "id": "1"\n}');
  });
});
