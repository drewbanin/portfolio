(function() {
  var MetricMapper, connection, metricMapper, mysql, url;

  mysql = require('mysql');

  url = require('url');

  MetricMapper = require('./MetricMapper');

  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'life'
  });

  connection.connect(function(err) {
    if (err) {
      throw err;
    }
  });

  metricMapper = new MetricMapper(connection);

  module.exports.metricTypes = function(req, res) {
    return metricMapper.getMetricTypes(function(data) {
      return res.send(data);
    });
  };

  module.exports.queryForMetric = function(req, res) {
    return metricMapper.queryForMetric(req.query.type, function(data) {
      return res.send(data);
    });
  };

}).call(this);
