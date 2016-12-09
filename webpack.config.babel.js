const configuration = process.env.NODE_ENV === 'production' ?
  require('./webpack.config.production.babel') :
  require('./webpack.config.development.babel')
export default configuration;
