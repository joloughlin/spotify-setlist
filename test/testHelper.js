import { shallow, mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import createObjectFromFixture from './support/createObjectFromFixture';
import * as responseCreators from './support/responseCreators';

Object.assign(global, responseCreators, {
  mount,
  React,
  shallow,
  createObjectFromFixture,
});

beforeEach(() => {
  jasmineEnzyme();
});

// require all js files that end with Spec.js or Spec.jsx in the test folder
var testsContext = require.context(".", true, /Spec.jsx?$/);
testsContext.keys().forEach(testsContext);

// output to the browser's console when the tests run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
