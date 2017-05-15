

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');
var _ = require('lodash')

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();

module.exports = require('./config/express')(app, config);

app.listen(config.port, function () {
  var farray = _.uniq([1, 2, 3, 1, 1])
  console.log('day la', process.argv)
  console.log('Express server listening on port ' + config.port);
});

