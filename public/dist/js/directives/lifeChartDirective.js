(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp');

  app.directive('lifeChart', function() {
    return {
      restrict: 'A',
      template: '<div id="life-chart-container"></div>',
      link: function(scope, elem, attrs) {
        return scope.$watch(attrs.data, function(data, old) {
          var chart;
          if (data != null) {
            if (data.chart == null) {
              data.chart = {};
            }
            data.chart.renderTo = 'life-chart-container';
            chart = new Highcharts.Chart(data);
            return setTimeout(function() {
              return $(window).resize();
            }, 0);
          }
        });
      }
    };
  });

}).call(this);
