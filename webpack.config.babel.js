import developmentConfiguration from './webpack.config.development.babel';
import productionConfiguration from './webpack.config.production.babel';

let environment = process.env.NODE_ENV;
let configuration = environment === 'production' ?
  productionConfiguration :
  developmentConfiguration;
export default configuration;
