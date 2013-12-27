(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp');

  app.controller('ChartCtrl', [
    '$scope', 'metricService', function($scope, metricService) {
      var makeChartData, setMetricListClosure, updateChart;
      $scope.metrics = [];
      setMetricListClosure = function(metricListFromServer) {
        var metric;
        return $scope.metricList = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = metricListFromServer.length; _i < _len; _i++) {
            metric = metricListFromServer[_i];
            _results.push({
              label: metric.metricLabel,
              unit: metric.unitLabel,
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
        return updateChart($scope.metrics);
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
      updateChart = function(metrics) {
        var categories, metric, series, typeId, _i, _len, _results;
        categories = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = metrics.length; _i < _len; _i++) {
            metric = metrics[_i];
            _results.push(metric.label);
          }
          return _results;
        })();
        series = [];
        _results = [];
        for (_i = 0, _len = metrics.length; _i < _len; _i++) {
          metric = metrics[_i];
          typeId = metric.id;
          _results.push(metricService.queryForMetric(typeId, function(data) {
            var newSeries, point, seriesData;
            seriesData = (function() {
              var _j, _len1, _results1;
              _results1 = [];
              for (_j = 0, _len1 = data.length; _j < _len1; _j++) {
                point = data[_j];
                _results1.push(parseInt(point.value));
              }
              return _results1;
            })();
            newSeries = {
              data: seriesData,
              name: metric.label,
              pointInterval: 24 * 3600 * 1000,
              pointStart: Date.UTC(2013, 0, 1)
            };
            series.push(newSeries);
            return $scope.lifeData = makeChartData(series);
          }));
        }
        return _results;
      };
      makeChartData = function(series) {
        return {
          chart: {
            zoomType: 'x'
          },
          legend: {
            enabled: true
          },
          title: {
            text: 'Drew\'s Life'
          },
          xAxis: {
            type: 'datetime',
            maxZoom: 31 * 24 * 3600 * 1000
          },
          yAxis: {
            title: {
              text: "y-axis title"
            },
            min: 0
          },
          series: series
        };
      };
      return $scope.lifeData = makeChartData([], []);
    }
  ]);

}).call(this);
