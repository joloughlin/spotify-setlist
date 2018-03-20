import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

export const shallowWithRouter = element =>
  shallow(<MemoryRouter>{element}</MemoryRouter>)
    .dive()
    .dive();
