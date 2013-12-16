
class MetricMapper

  constructor : (@conn) ->

  getMetricTypes : (callback) ->
    selectList = 'mt.id as id, mt.label as metricLabel, mu.label as unitLabel, mu.id as unitId'
    sql = "SELECT #{selectList} FROM MetricTypes mt JOIN MetricUnits mu ON mt.unitId = mu.id"
    @conn.query sql, (err, rows) ->
      if err then throw err # TODO : do this better
      callback rows

  queryForMetric : (typeId, callback) ->
    selectList = 'value, eventDate as date'
    sql = "SELECT #{selectList} FROM Metrics where typeId = ?"
    fields = [typeId]
    @conn.query sql, fields, (err, rows) ->
      if err then throw err # TODO : do this better
      callback rows

module.exports = (conn) ->
  new MetricMapper conn
