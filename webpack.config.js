const { NODE_ENV } = process.env;

// eslint-disable-next-line import/no-dynamic-require
module.exports = require( `./webpack/${NODE_ENV}` );
