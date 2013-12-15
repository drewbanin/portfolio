
mysql = require 'mysql'
url = require 'url'

connection = mysql.createConnection {
  host : 'localhost'
  user : 'root'
  password : 'password'
  database : 'life'
}
connection.connect (err) ->
  if err then throw err


unitMap = {}
metricList = {}
unitQuery = connection.query 'SELECT id, label FROM MetricUnits', (err, rows) ->
  if err then throw err
  for row in rows
    unitMap[row['id']] = row['label']

  query = connection.query 'SELECT id, label, unitId FROM MetricTypes', (typeErr, typeRows) ->
    if typeErr then throw typeErr
    metricList = for row in typeRows
      'id'    : row['id']
      'label' : row['label']
      'unit'  : unitMap[row['unitId']]

module.exports.metricList = (req, res) ->
  res.send metricList

queryForMetric = (callback, typeId) ->
  unitQuery = connection.query "SELECT value, eventDate FROM Metrics where typeId = #{typeId}", (err, rows) ->
    points = for row in rows
      value : row['value']
      date  : row['eventDate']
    callback.send points

module.exports.metricQuery = (req, res) ->
  queryForMetric res, req.query.type
