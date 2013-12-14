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
            console.log('rendering', data);
            return elem.highcharts(data);
          } else {
            return console.log('nope');
          }
        });
      }
    };
  });

}).call(this);
