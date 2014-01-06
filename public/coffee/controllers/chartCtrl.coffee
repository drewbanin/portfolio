'use strict'

app = angular.module 'lifeApp'

app.controller 'ChartCtrl', ['$scope', 'metricService', ($scope, metricService) ->
  $scope.metrics = []

  series_colors = ["#00A0B0", "#CC333F", "#6A4A3C", "#EDC951"]

  setMetricListClosure = (metricListFromServer) ->
    $scope.metricList = for metric in metricListFromServer
      label: metric.metricLabel
      unit: metric.unitLabel
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

  updateChart = (metrics) ->
    series = []
    makeSeriesFunc = (index, label) ->
      return (data) ->
        seriesData = (parseInt(point.value) for point in data)
        newSeries =
          color : series_colors[index]
          data: seriesData
          name: label
          pointInterval: 24 * 3600 * 1000
          pointStart: Date.UTC(2013, 0, 1)
        series.push newSeries
        $scope.lifeData = makeChartData series

    for metric, index in metrics
      typeId = metric.id
      metricService.queryForMetric typeId, makeSeriesFunc(index, metric.label)

  makeChartData = (series) ->
    chart:
      zoomType: 'x'

    legend:
      enabled: true

    title:
      text: 'Drew\'s Life'

    xAxis:
      type: 'datetime'
      maxZoom: 31 * 24 * 3600 * 1000

    yAxis:
      title:
        text: "y-axis title"
      min: 0

    series: series

  $scope.lifeData = makeChartData [], []
]

