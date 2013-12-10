'use strict'

app = angular.module 'lifeApp'

app.factory 'metricService', ["$http", ($http) ->

  getMetricList : ->
    $http
      method: 'GET'
      url: 'http://localhost:8000/metrics/list'
    .success( (data, status, headers, config) ->
      console.log data
    ).error( (data, status, headers, config) ->
      console.log "meep, error"
    )
    return [1, 2, 3]
]

