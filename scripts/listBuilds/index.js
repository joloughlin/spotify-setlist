'use strict';

const displayBuilds = require('./displayBuilds');
const loadEnvironment = require('../loadEnvironment');

loadEnvironment({ callback: displayBuilds, commandName: 'list-builds' });
