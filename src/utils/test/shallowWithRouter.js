import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

export default element =>
  shallow(<MemoryRouter>{element}</MemoryRouter>)
    .dive()
    .dive();
