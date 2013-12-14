(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp');

  app.controller('ChartCtrl', [
    '$scope', 'metricService', function($scope, metricService) {
      var makeCategories, makeSeries, setMetricListClosure, updateChart;
      $scope.metrics = [];
      setMetricListClosure = function(metricListFromServer) {
        var metric;
        return $scope.metricList = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = metricListFromServer.length; _i < _len; _i++) {
            metric = metricListFromServer[_i];
            _results.push({
              label: metric.label,
              unit: metric.unit,
              id: metric.id,
              selected: false
            });
          }
          return _results;
        })();
      };
      metricService.getMetricList(setMetricListClosure);
      $scope.addMetric = function(metric) {
        $scope.metrics.push(metric);
        metric.selected = true;
        updateChart($scope.metrics);
        return console.log($scope.lifeData);
      };
      $scope.removeMetric = function(metric) {
        var pos;
        pos = $scope.metrics.indexOf(metric);
        $scope.metrics.splice(pos, 1);
        metric.selected = false;
        return updateChart($scope.metrics);
      };
      $scope.replaceMetric = function(oldMetric, newMetric) {
        var pos;
        oldMetric.selected = false;
        pos = $scope.metrics.indexOf(oldMetric);
        $scope.metrics[pos] = newMetric;
        return updateChart($scope.metrics);
      };
      makeSeries = function(metrics) {
        var metric, series;
        return series = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = metrics.length; _i < _len; _i++) {
            metric = metrics[_i];
            _results.push({
              name: metric.label,
              data: [1, 2, 3]
            });
          }
          return _results;
        })();
      };
      makeCategories = function(metrics) {
        var metric, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = metrics.length; _i < _len; _i++) {
          metric = metrics[_i];
          _results.push(metric.label);
        }
        return _results;
      };
      updateChart = function(metrics) {
        $scope.lifeData.series = makeSeries($scope.metrics);
        return $scope.lifeData.xAxis.categories = makeCategories($scope.metrics);
      };
      return $scope.lifeData = {
        xAxis: {
          categories: []
        },
        yAxis: {
          title: {
            text: "Drew's Life"
          }
        },
        series: []
      };
    }
  ]);

}).call(this);
