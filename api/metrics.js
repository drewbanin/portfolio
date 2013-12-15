(function() {
  var connection, metricList, mysql, queryForMetric, unitMap, unitQuery, url;

  mysql = require('mysql');

  url = require('url');

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

  unitMap = {};

  metricList = {};

  unitQuery = connection.query('SELECT id, label FROM MetricUnits', function(err, rows) {
    var query, row, _i, _len;
    if (err) {
      throw err;
    }
    for (_i = 0, _len = rows.length; _i < _len; _i++) {
      row = rows[_i];
      unitMap[row['id']] = row['label'];
    }
    return query = connection.query('SELECT id, label, unitId FROM MetricTypes', function(typeErr, typeRows) {
      if (typeErr) {
        throw typeErr;
      }
      return metricList = (function() {
        var _j, _len1, _results;
        _results = [];
        for (_j = 0, _len1 = typeRows.length; _j < _len1; _j++) {
          row = typeRows[_j];
          _results.push({
            'id': row['id'],
            'label': row['label'],
            'unit': unitMap[row['unitId']]
          });
        }
        return _results;
      })();
    });
  });

  module.exports.metricList = function(req, res) {
    return res.send(metricList);
  };

  queryForMetric = function(callback, typeId) {
    return unitQuery = connection.query("SELECT value, eventDate FROM Metrics where typeId = " + typeId, function(err, rows) {
      var points, row;
      points = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = rows.length; _i < _len; _i++) {
          row = rows[_i];
          _results.push({
            value: row['value'],
            date: row['eventDate']
          });
        }
        return _results;
      })();
      return callback.send(points);
    });
  };

  module.exports.metricQuery = function(req, res) {
    return queryForMetric(res, req.query.type);
  };

}).call(this);
