import React from 'react';
import { shallow } from 'enzyme';
import { ToJSON } from '../ToJSON';
import { renderToJSON } from '../renderToJSON';
import BaseComponent from 'utils/test';

describe('renderToJSON', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      id: '1',
    };
    const EnhancedComponent = renderToJSON(BaseComponent);
    wrapper = shallow(<EnhancedComponent {...props} />);
  });

  it('renders props as text', () => {
    expect(wrapper).toContainReact(<ToJSON {...props} />);
  });
});
