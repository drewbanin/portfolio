'use strict'

app = angular.module 'lifeApp'

app.controller 'ChartCtrl', ['$scope', ($scope) ->
  $scope.metrics = []
  $scope.metricList = [
    label: "metric1"
    selected: false
  ,
    label: "metric2"
    selected: false
  ,
    label: "metric 3"
    selected: false
  ]

  $scope.addMetric = (metric) ->
    $scope.metrics.push metric
    metric.selected = true
  $scope.removeMetric = (metric) ->
    pos = $scope.metrics.indexOf metric
    $scope.metrics.splice pos, 1
    metric.selected = false
  $scope.replaceMetric = (oldMetric, newMetric) ->
    oldMetric.selected = false
    pos = $scope.metrics.indexOf oldMetric
    $scope.metrics[pos] = newMetric
  $scope.lifeData =
    xAxis:
      categories: ['January', 'February', 'March']
    yAxis:
      title:
        text: 'Fruit eaten'
    series: [
      name: 'Jane'
      data: [1, 0, 4]
    ,
      name: 'John'
      data: [5, 7, 3]
    ,
      name: 'John2'
      data: [15, 17, 13]
    ,
      name: 'John3'
      data: [25, 27, 23]
    ]
]

