(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp');

  app.controller('ChartCtrl', [
    '$scope', 'metricService', function($scope, metricService) {
      $scope.metrics = [];
      $scope.metricList = metricService.getMetricList();
      console.log($scope.metricList);
      $scope.addMetric = function(metric) {
        $scope.metrics.push(metric);
        return metric.selected = true;
      };
      $scope.removeMetric = function(metric) {
        var pos;
        pos = $scope.metrics.indexOf(metric);
        $scope.metrics.splice(pos, 1);
        return metric.selected = false;
      };
      $scope.replaceMetric = function(oldMetric, newMetric) {
        var pos;
        oldMetric.selected = false;
        pos = $scope.metrics.indexOf(oldMetric);
        return $scope.metrics[pos] = newMetric;
      };
      return $scope.lifeData = {
        xAxis: {
          categories: ['January', 'February', 'March']
        },
        yAxis: {
          title: {
            text: 'Fruit eaten'
          }
        },
        series: [
          {
            name: 'Jane',
            data: [1, 0, 4]
          }, {
            name: 'John',
            data: [5, 7, 3]
          }, {
            name: 'John2',
            data: [15, 17, 13]
          }, {
            name: 'John3',
            data: [25, 27, 23]
          }
        ]
      };
    }
  ]);

}).call(this);
