'use strict'

app = angular.module 'lifeApp'

app.controller 'ChartCtrl', ['$scope', 'metricService', ($scope, metricService) ->
  $scope.metrics = []

  setMetricListClosure = (metricListFromServer) ->
    $scope.metricList = for metric in metricListFromServer
      label: metric.label
      unit: metric.unit
      id: metric.id
      selected: false

  metricService.getMetricList setMetricListClosure

  $scope.addMetric = (metric) ->
    $scope.metrics.push metric
    metric.selected = true
    updateChart($scope.metrics)

  $scope.removeMetric = (metric) ->
    pos = $scope.metrics.indexOf metric
    $scope.metrics.splice pos, 1
    metric.selected = false
    updateChart($scope.metrics)

  $scope.replaceMetric = (oldMetric, newMetric) ->
    oldMetric.selected = false
    pos = $scope.metrics.indexOf oldMetric
    $scope.metrics[pos] = newMetric
    updateChart($scope.metrics)

  makeSeries = (metrics) ->
    series = []
    addSeries = (data) ->
      data = for point in data
        point.value
      series.push data

    for metric in metrics
      typeId = metric.id
      metricService.queryForMetric addSeries, typeId
    series

  makeCategories = (metrics) ->
    metric.label for metric in metrics

  updateChart = (metrics) ->
    categories = makeCategories $scope.metrics
    series = makeSeries $scope.metrics
    $scope.lifeData = makeChartData categories, series
    console.log $scope.lifeData

  makeChartData = (categories, series) ->
    xAxis:
      categories: categories

    yAxis:
      title:
        text: "Drew's Life"

    series: series

  $scope.lifeData = makeChartData [], []
]

