(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp');

  app.factory('metricService', [
    "$http", function($http) {
      return {
        getMetricList: function() {
          $http({
            method: 'GET',
            url: '/metrics/list'
          }).success(function(data, status, headers, config) {
            return console.log(data);
          }).error(function(data, status, headers, config) {
            return console.log("meep, error");
          });
          return [1, 2, 3];
        }
      };
    }
  ]);

}).call(this);
