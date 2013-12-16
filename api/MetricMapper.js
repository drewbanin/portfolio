(function() {
  var MetricMapper;

  MetricMapper = (function() {
    function MetricMapper(conn) {
      this.conn = conn;
    }

    MetricMapper.prototype.getMetricTypes = function(callback) {
      var selectList, sql;
      selectList = 'mt.id as id, mt.label as metricLabel, mu.label as unitLabel, mu.id as unitId';
      sql = "SELECT " + selectList + " FROM MetricTypes mt JOIN MetricUnits mu ON mt.unitId = mu.id";
      return this.conn.query(sql, function(err, rows) {
        if (err) {
          throw err;
        }
        return callback(rows);
      });
    };

    MetricMapper.prototype.queryForMetric = function(typeId, callback) {
      var fields, selectList, sql;
      selectList = 'value, eventDate as date';
      sql = "SELECT " + selectList + " FROM Metrics where typeId = ?";
      fields = [typeId];
      return this.conn.query(sql, fields, function(err, rows) {
        if (err) {
          throw err;
        }
        return callback(rows);
      });
    };

    return MetricMapper;

  })();

  module.exports = function(conn) {
    return new MetricMapper(conn);
  };

}).call(this);
