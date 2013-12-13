(function() {
  var connection, metricList, mysql, unitMap, unitQuery, url;

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
      var _j, _len1, _results;
      if (typeErr) {
        throw typeErr;
      }
      _results = [];
      for (_j = 0, _len1 = typeRows.length; _j < _len1; _j++) {
        row = typeRows[_j];
        _results.push(metricList[row['id']] = {
          'label': row['label'],
          'unit': unitMap[row['unitId']]
        });
      }
      return _results;
    });
  });

  module.exports.metricList = function(req, res) {
    console.log(req, res);
    return res.send(metricList);
  };

}).call(this);
