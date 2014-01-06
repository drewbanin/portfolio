(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp');

  app.controller('ChartCtrl', [
    '$scope', 'metricService', function($scope, metricService) {
      var makeChartData, series_colors, setMetricListClosure, updateChart;
      $scope.metrics = [];
      series_colors = ["#00A0B0", "#CC333F", "#6A4A3C", "#EDC951"];
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
        var index, makeSeriesFunc, metric, series, typeId, _i, _len, _results;
        series = [];
        makeSeriesFunc = function(index, label) {
          return function(data) {
            var newSeries, point, seriesData;
            seriesData = (function() {
              var _i, _len, _results;
              _results = [];
              for (_i = 0, _len = data.length; _i < _len; _i++) {
                point = data[_i];
                _results.push(parseInt(point.value));
              }
              return _results;
            })();
            newSeries = {
              color: series_colors[index],
              data: seriesData,
              name: label,
              pointInterval: 24 * 3600 * 1000,
              pointStart: Date.UTC(2013, 0, 1)
            };
            series.push(newSeries);
            return $scope.lifeData = makeChartData(series);
          };
        };
        _results = [];
        for (index = _i = 0, _len = metrics.length; _i < _len; index = ++_i) {
          metric = metrics[index];
          typeId = metric.id;
          _results.push(metricService.queryForMetric(typeId, makeSeriesFunc(index, metric.label)));
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
