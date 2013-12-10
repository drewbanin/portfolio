
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

express = require 'express'
app = express()

unitMap = {}
metricMap = {}
unitQuery = connection.query 'SELECT id, label FROM MetricUnits', (err, rows) ->
  if err then throw err
  for row in rows
    unitMap[row['id']] = row['label']

  query = connection.query 'SELECT id, label, unitId FROM MetricTypes', (typeErr, typeRows) ->
    if typeErr then throw typeErr
    for row in typeRows
      metricMap[row['id']] = {
        'label' : row['label']
        'unit'  : unitMap[row['unitId']]
      }

app.get '/metrics/list', (req, res) ->
  res.send metricMap

app.get '/query', (req, res) ->
  url_parts = url.parse req.url, true
  params = url_parts.query
  typeId = params.id
  console.log typeId
  query = connection.query 'SELECT * FROM Metrics WHERE typeId = ' + typeId, (err, result) ->
    if err then res.send err # But actually throw a 500 instead!
    res.send result

app.listen(8000)

