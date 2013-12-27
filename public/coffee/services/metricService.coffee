'use strict'

app = angular.module 'lifeApp'

app.factory 'metricService', ["$http", ($http) ->

  getMetricList : (callback) ->
    $http
      method: 'GET'
      url: '/metric/list'
    .success (data, status, headers, config) ->
      callback(data)
    .error (data, status, headers, config) ->
      console.log "meep, error"

  queryForMetric : (type, callback) ->
    $http
      method: 'GET'
      url: "/metric/query?type=#{type}"
    .success (data, status, headers, config) ->
      callback data
    .error (data, status, headers, config) ->
      console.log "meep, error"
]

