
mysql = require 'mysql'
url = require 'url'

MetricMapper = require './MetricMapper'

connection = mysql.createConnection {
  host : 'localhost'
  user : 'root'
  password : 'password'
  database : 'life'
}

connection.connect (err) ->
  if err then throw err

metricMapper = new MetricMapper connection

module.exports.metricTypes = (req, res) ->
  metricMapper.getMetricTypes (data) ->
    res.send data

module.exports.queryForMetric = (req, res) ->
  # TODO : error handle missing type
  metricMapper.queryForMetric req.query.type, (data) ->
    res.send data
