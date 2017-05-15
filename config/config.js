var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodejs'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost:27017'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodejs'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodejs-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodejs'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodejs-production'
  }
};

module.exports = config[env];
