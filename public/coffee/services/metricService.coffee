'use strict'

app = angular.module 'lifeApp'

app.factory 'metricService', ["$http", ($http) ->

  getMetricList : (metricObj) ->
    $http
      method: 'GET'
      url: '/metric/list'
    .success( (data, status, headers, config) ->
      console.log data
      metricObj.data = data
    ).error( (data, status, headers, config) ->
      console.log "meep, error"
    )
]

