'use strict';

const activate = require('./activate');
const loadEnvironment = require('../loadEnvironment');

loadEnvironment({ callback: activate, commandName: 'activate-build' });
