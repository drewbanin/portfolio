(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp');

  app.controller('ChartCtrl', [
    '$scope', function($scope) {
      $scope.numMetrics = 0;
      $scope.availableMetrics = ["metric1", "metric 2", "metric 3"];
      $scope.addMetric = function(metric) {
        return console.log(metric);
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
