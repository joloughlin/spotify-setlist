const path = require('path');
const webpackConfig = require('../config/webpack.config.js');

module.exports = (baseConfig, env) => {
  const storybookConfig = Object.assign({}, baseConfig);
  const projectConfig = webpackConfig({ addons: [], env: 'development' });

  const projectConfigRules = projectConfig.module.rules.filter(
    ({ test }) => !test || !test.test('.js'),
  );
  storybookConfig.module.rules = [
    ...storybookConfig.module.rules,
    ...projectConfigRules,
  ];
  storybookConfig.resolve = projectConfig.resolve;

  return storybookConfig;
};
