
class MetricList
  constructor: (@conn) ->
    @select = ["id", "label"]

  getMetrics: () ->
    query = @conn.query 'SELECT ? FROM MetricTypes', @select, (err, rows) ->
      if err then throw err
      metricMap = {}
      for row in rows
        typeId = row['id']
        metricMap[typeId] = row['label']
    console.log query
