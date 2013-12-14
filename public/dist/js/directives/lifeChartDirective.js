(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp');

  app.directive('lifeChart', function() {
    return {
      restrict: 'A',
      template: '<div id="mainLifeChart" style="width:100%; height:100%;"></div>',
      replace: true,
      link: function(scope, elem, attrs) {
        return scope.$watch(attrs.data, function(data, old) {
          if (data != null) {
            return elem.highcharts(data);
          }
        });
      }
    };
  });

}).call(this);
