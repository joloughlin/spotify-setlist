const webpackMerge = require('webpack-merge');

const addonConfigs = addonsArg => {
  const addons = [].concat.apply([], [addonsArg]).filter(Boolean);

  return addons.map(addonName => require(`./addons/webpack.${addonName}`));
};

module.exports = ({ addons, env }) => {
  require('dotenv').config({ path: `.env.${env}` });

  const commonConfig = require('./webpack.common');

  const envConfigFile =
    process.env.NODE_ENV === 'development'
      ? './webpack.development.js'
      : './webpack.build.js';

  const envConfig = require(envConfigFile);

  return webpackMerge(commonConfig, envConfig, ...addonConfigs(addons));
};
